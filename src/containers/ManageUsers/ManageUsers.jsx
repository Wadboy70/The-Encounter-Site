import React, { useEffect } from 'react';
import { useState } from 'react';
import ManageUserTable from '../../components/ManageUserTable/ManageUserTable';
import ManageUserWindow from '../../components/ManageUserWindow/ManageUserWindow';

import { getAllUsers } from "../../utils/firebase";
import { titleCaseSentence } from '../../utils/helperFunctions'

import './ManageUsers.scss'

const ManageUsers = () => {
    const [userList, setUserList] = useState(null);
    console.log(userList);
    useEffect(() => {
        if(!userList){
            (async () => {
                setUserList(await getAllUsers());
            })();
        }
    });

    const userCells = userList?.map((userData, index) => {
        let date;
        try {
            date = userData.date?.toDate().toDateString();
        } catch{
             date = '';
        }
        return(
        <tr key = {index}>
            <td>{userData.email}</td>
            <td>{userData.displayName}</td>
            <td>{date}</td>
            <td>{titleCaseSentence(userData.tier)}</td>
        </tr>
    )});

    return(
        <div className = 'manageUsers'>
            <ManageUserWindow/>
            <ManageUserTable userCells = {userCells}/>
        </div>
    );
}
export default ManageUsers;