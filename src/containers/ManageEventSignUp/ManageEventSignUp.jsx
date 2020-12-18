import React, { useEffect, useState } from 'react';

import { deleteDoc, getAllDocs } from '../../utils/firebase';
import { DUPLICATE_PAGES, FORM_SUBMIT_TYPE } from '../../utils/routes';
import Button from '../../components/Button/Button';

import './ManageEventSignUp.scss';
import { copyToClipboard } from '../../utils/helperFunctions';

const ManageEventSignUp = () => {
    const [programs, setPrograms] = useState(undefined);
    const setRefreshUpdate = () => {
        setPrograms(undefined);
    }
    useEffect(()=>{
        let mounted = true;

        const getUserInfo = async () => {
            let programInfo = {};

            let dataPoints = DUPLICATE_PAGES.filter(page => {
                return (page.form?.submit?.type === FORM_SUBMIT_TYPE.ADMIN_STORAGE);
            });

            let data =  mounted ? await Promise.all(dataPoints.map(async page => await getAllDocs(page.form.submit.collection))) : [];
            
            dataPoints.forEach((programMember, index) =>{
                programInfo[programMember.title] = {
                    colId: programMember.form.submit.collection,
                    data: data[index]
                };
            })
            setPrograms(programInfo);
        }
        
        if(!programs) getUserInfo();

        return () => mounted = false;
    })
    return(
        <div className = 'manageEventSignUp'>
            <h1 className = 'manageEventSignUp__title'>Manage Program Sign Ups</h1>
            {
                programs && 
                Object.keys(programs).map(programName => (
                    <ManageEventSignUpRow
                        key = { programName }
                        programName = { programName }
                        programs = { programs }
                        setRefreshUpdate = { setRefreshUpdate }
                    />
                ))
            }
        </div>
    )
};

const ManageEventSignUpRow = ({programs, programName, setRefreshUpdate}) => {
    const copyEmails = program => {
        let emails = program.map(val => val.email).join(',');
        if(emails !== '') {
            copyToClipboard(emails);
            alert('Emails were copied!');
        }
    };
    let programInfo = programs[programName].data, programId = programs[programName].colId;
    const deleteMember = (id) => {
        deleteDoc(id, programId).then(val =>{
            setRefreshUpdate();
        });
    };

    return(
        <div className = 'manageEventSignUp__program'>
            <span className = 'program__headerInfo'>
                <h2 className = 'program__title'>{programName}</h2>
                <Button 
                    op = {() => copyEmails(programInfo)}
                    className = 'transparent navyBorder small program__button'
                >Copy emails</Button>
            </span>
            
            <ul className = 'program__entries'>
                {
                    programInfo.map(member => (
                        <li key = {member.name} className = 'entry__member'>
                            <span className = 'member__name'>{member.name}</span>
                            <span className = 'member__email'>{member.email}</span>
                            <span>
                                <Button 
                                    className = 'transparent small member__button'
                                    op = {() => deleteMember(member.id)}
                                >X</Button>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ManageEventSignUp;