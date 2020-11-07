import React, { useEffect } from 'react';
import { useState } from 'react';
import ManageUserTable from '../../components/ManageUserTable/ManageUserTable';
import ManageUserWindow from '../../components/ManageUserWindow/ManageUserWindow';

import { getAllUsers } from "../../utils/firebase";
import { titleCaseSentence, parseFirestoreDate } from '../../utils/helperFunctions'

import './ManageUsers.scss'

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
    
    useEffect(() => {
        if(!userList){
            (async () => {
                setUserList(await getAllUsers());
            })();
        }
    });

    return(
        <div className = 'manageUsers'>
            <ManageUserWindow selectedUser = {selectedUser}/>
            <ManageUserTable 
                userCells = {userCells} 
                setSelectedUser = {setSelectedUser}
            />
        </div>
    );
}
export default ManageUsers;