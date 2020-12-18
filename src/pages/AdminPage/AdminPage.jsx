import React, { useEffect, useState } from 'react';

import ManageUsers from '../../containers/ManageUsers/ManageUsers';
import { getAllDocs } from '../../utils/firebase';
import withSpinner from '../../utils/hocs/withSpinner';
import withUserRedirect from '../../utils/hocs/withUserRedirect';
import { DUPLICATE_PAGES, FORM_SUBMIT_TYPE } from '../../utils/routes';

import './AdminPage.scss';

const AdminPage = () => {
    const [signUpInfo, setSignUpInfo] = useState(undefined);
    useEffect(()=> {
        //just fuckin rewrite this shit
        let mounted = true;
        const getInfo = async () => {
            let docInfo = [], relevantDocs = [];
            
            DUPLICATE_PAGES.forEach((page, index) => {
                page.form?.submit?.type === FORM_SUBMIT_TYPE.ADMIN_STORAGE && relevantDocs.push(page);
            });
            console.log(relevantDocs)
            await relevantDocs.forEach((page) => {
                // mounted &&
                return getAllDocs(page.form.submit.collection).then(docs => {
                    docInfo.push({name: page.title, info: docs});
                });
            });
            console.log(docInfo);
            setSignUpInfo(docInfo);
        }
        if(!signUpInfo) getInfo();
        return () => mounted = false;
    });
    useEffect(()=> {
        console.log([...(signUpInfo||[])])
    },[signUpInfo])
    return(
        <div className = 'adminPage'>
            <ManageUsers/>
            {
                signUpInfo?.map(program => {
                    console.log(program)
                    return(
                        <div>
                            <h2>{program.name}</h2>
                            <ul>
                                {
                                    program.info?.map(userSignUps => (
                                        <li>
                                            <span>{userSignUps.name}</span>
                                            <span>{userSignUps.email}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default withUserRedirect(withSpinner(AdminPage));