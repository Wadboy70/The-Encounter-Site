import React, { useEffect } from 'react';
import { useState } from 'react';
import ManageUserTable from '../../components/ManageUserTable/ManageUserTable';
import ManageUserWindow from '../../components/ManageUserWindow/ManageUserWindow';

import { getAllUsers, updateUserDoc } from "../../utils/firebase";
import { titleCaseSentence, parseFirestoreDate } from '../../utils/helperFunctions'

import './ManageUsers.css'

const ManageUsers = () => {
    const [userList, setUserList] = useState(null);
    const [selectedUser, setSelectedUser] = useState({});

    const userCells = userList?.map((userData, index) => {
        
        return(
        <tr key = {index} onClick = {() => setSelectedUser(userList[index])}>
            <td>{userData.email}</td>
            <td>{userData.displayName}</td>
            <td>{parseFirestoreDate(userData.date)}</td>
            <td>{titleCaseSentence(userData.tier)}</td>
        </tr>
    )});

    const changeUserTier = (e) => {
        let affirm = window.confirm('Are you sure you want to change this user\'s tier?');
        if (affirm) {
            updateUserDoc(selectedUser.id, e.target.value)
            .then(async ()=>{
                setUserList(await getAllUsers());
                setSelectedUser({});
            });
        }
    }
    
    useEffect(() => {
        if(!userList){
            (async () => {
                setUserList(await getAllUsers());
            })();
        }
    });

    return(
        <div className = 'manageUsers'>
            <h1 className = 'manageUsers__title'>Manage Users</h1>
            <ManageUserWindow 
                selectedUser = {selectedUser} 
                changeUserTier = {changeUserTier}
            />
            <ManageUserTable 
                userCells = {userCells} 
            />
        </div>
    );
}
export default ManageUsers;