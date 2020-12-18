import React, { useEffect, useState } from 'react';

import { getAllDocs } from '../../utils/firebase';
import { DUPLICATE_PAGES, FORM_SUBMIT_TYPE } from '../../utils/routes';

import './ManageEventSignUp.scss';

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
    return(
        <div className = 'manageEventSignUp'>
            {
                programs &&
                Object.keys(programs).map(program => (
                    <div key = {program} className = 'manageEventSignUp__program'>
                        <h2 className = 'program__title'>{program}</h2>
                        <ul className = 'program__entries'>
                            {
                                programs[program].map(member => (
                                    <li key = {member.name} className = 'entry__member'>
                                        <span className = 'member__name'>{member.name}</span>
                                        <span className = 'member__email'>{member.email}</span>
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