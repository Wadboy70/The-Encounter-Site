import React from 'react';

import './ManageUserTable.css';

const ManageUserTable = ({userCells}) => {
    return(
        <div className = 'manageUserTable'>
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
                        userCells
                    }
                </tbody>
            </table>
        </div>
    )
};

export default ManageUserTable;