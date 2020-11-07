import React, { useEffect } from 'react';
import { useState } from 'react';

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
    })
    return(
        <div className = 'manageUsers'>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Sign Up Date</th>
                        <th>Tier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList &&
                        userList.map((userData, index) => {
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
                        )})
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ManageUsers;