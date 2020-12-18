import React, { useEffect, useState } from 'react';

import ManageUsers from '../../containers/ManageUsers/ManageUsers';
import { getAllDocs } from '../../utils/firebase';
import withSpinner from '../../utils/hocs/withSpinner';
import withUserRedirect from '../../utils/hocs/withUserRedirect';
import { DUPLICATE_PAGES, FORM_SUBMIT_TYPE } from '../../utils/routes';

import './AdminPage.scss';

const AdminPage = () => {
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
        <div className = 'adminPage'>
            <ManageUsers/>
            {
                programs &&
                Object.keys(programs).map(program => (
                    <div key = {program}>
                        <h2>{program}</h2>
                        <ul>
                            {
                                programs[program].map(member => (
                                    <li key = {member.name}>
                                        <span>{member.name}</span>
                                        <span>{member.email}</span>
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

export default withUserRedirect(withSpinner(AdminPage));