import React, { useEffect, useState } from 'react';

import { getAllDocs } from '../../utils/firebase';
import { DUPLICATE_PAGES, FORM_SUBMIT_TYPE } from '../../utils/routes';
import Button from '../../components/Button/Button';

import './ManageEventSignUp.scss';
import { copyToClipboard } from '../../utils/helperFunctions';

const ManageEventSignUp = () => {
    const [programs, setPrograms] = useState(undefined);
    useEffect(()=>{
        let mounted = true;

        const getUserInfo = async () => {
            let programInfo = {};

            let dataPoints = DUPLICATE_PAGES.filter(page => {
                return (page.form?.submit?.type === FORM_SUBMIT_TYPE.ADMIN_STORAGE);
            });

            let data =  mounted ? await Promise.all(dataPoints.map(async page => await getAllDocs(page.form.submit.collection))) : [];
            
            dataPoints.forEach((programMember, index) =>{
                programInfo[programMember.title] = data[index];
            })
            setPrograms(programInfo);
        }
        
        if(!programs) getUserInfo();

        return () => mounted = false;
    })
    const copyEmails = program => {
        let emails = program.map(val => val.email).join(',');
        if(emails !== '') {
            copyToClipboard(emails);
            alert('Emails were copied!');
        }
    }
    return(
        <div className = 'manageEventSignUp'>
            <h1 className = 'manageEventSignUp__title'>Manage Program Sign Ups</h1>
            {
                programs &&
                Object.keys(programs).map(program => (
                    <div key = {program} className = 'manageEventSignUp__program'>
                        <span className = 'program__headerInfo'>
                            <h2 className = 'program__title'>{program}</h2>
                            <Button 
                                op = {() => copyEmails(programs[program])}
                                className = 'transparent navyBorder small program__button'
                            >Copy emails</Button>
                        </span>
                        
                        <ul className = 'program__entries'>
                            {
                                programs[program].map(member => (
                                    <li key = {member.name} className = 'entry__member'>
                                        <span className = 'member__name'>{member.name}</span>
                                        <span className = 'member__email'>{member.email}</span>
                                        <span>
                                            <Button 
                                                className = 'transparent small member__button'
                                            >X</Button>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
};

export default ManageEventSignUp;