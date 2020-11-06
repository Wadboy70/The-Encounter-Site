import React from 'react';

import './ManageUsers.scss'

const ManageUsers = () => {
    return(
        <div className = 'manageUsers'>
            <table>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Sign Up Date</th>
                    <th>Tier</th>
                </tr>
            </table>
        </div>
    );
}
export default ManageUsers;