import React from 'react';
import USER_TIERS from '../../utils/constants/userTiers';

import './ManageUserWindow.scss';

const ManageUserWindow = ({selectedUser = {}}) => {
    const {email, displayName, date, tier} = selectedUser;
    return (
        <table>
            {
                email &&
                <thead>
                    
                    <tr>
                        <th>{email}</th>
                        <th>{displayName}</th>
                        <th>{date}</th>
                        <th>
                            <select aria-label = 'tiers' name="tiers" id="tierList" defaultValue = {tier}>
                                {
                                    Object.keys(USER_TIERS).map(tierChoice => (
                                        <option 
                                            key = {tierChoice} 
                                            value = {tierChoice}
                                        >
                                            {tierChoice}
                                        </option>
                                    ))
                                }
                            </select>
                        </th>
                    </tr>
                </thead>
            }
        </table>
    )
};

export default ManageUserWindow;