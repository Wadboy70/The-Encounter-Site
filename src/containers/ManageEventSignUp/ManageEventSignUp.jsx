import React, { useEffect, useState } from 'react';

import { deleteDoc, getAllDocs } from '../../utils/firebase';
import { DUPLICATE_PAGES, FORM_SUBMIT_TYPE } from '../../utils/routes';
import Button from '../../components/Button/Button';

import './ManageEventSignUp.css';
import { copyToClipboard, replaceWhitespace, replaceUnderscore, titleCaseSentence } from '../../utils/helperFunctions';

const ManageEventSignUp = () => {
    const [programs, setPrograms] = useState(undefined);
    const setRefreshUpdate = () => {
        setPrograms(undefined);
    }
    useEffect(()=>{
        let mounted = true;

        const getUserInfo = async () => {
            let programInfo = [];

            //dataPoints gathers all of the correct collection names from the routes
            let dataPoints = DUPLICATE_PAGES.reduce((accum, page) => {
                let submit = page.form?.submit, 
                    partition = submit?.partition, 
                    collection = submit?.collection, 
                    type = submit?.type;
                if (type === FORM_SUBMIT_TYPE.ADMIN_STORAGE){
                    if(partition){
                        //putting the collection names into the same format that they are listed under in the database
                        let collectionNames = page.form.fields
                            .find(field => field.name === partition)?.values
                            .map(groupName => replaceWhitespace(collection + ' ' + groupName, '_'));
                        accum.push(...collectionNames);
                    } else accum.push(collection);
                }
                return accum;
            },[]);

            let data =  mounted ? await Promise.all(dataPoints.map(async page => await getAllDocs(page))) : [];

            dataPoints.forEach((programMember, index) =>{
                let name = titleCaseSentence(replaceUnderscore(programMember));
                programInfo.push ({
                    name: name,
                    colId: programMember,
                    data: data[index]
                });
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
                programs.map(program => (
                    <ManageEventSignUpRow
                        key = { program.name }
                        programName = { program.name }
                        programId = { program.colId }
                        programInfo = { program.data }
                        setRefreshUpdate = { setRefreshUpdate }
                    />
                ))
            }
        </div>
    )
};

const ManageEventSignUpRow = ({programInfo, programId, programName, setRefreshUpdate}) => {
    const copyEmails = program => {
        let emails = program.map(val => val.email).join(',');
        if(emails !== '') {
            copyToClipboard(emails);
            alert('Emails were copied!');
        }
    };
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
                            {
                                Object.keys(member).map(val => (
                                    (val !== 'group' && val !== 'id' && val !== 'captcha') && 
                                    <span key = {val}>{member[val]}</span>
                                ))  
                            }
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