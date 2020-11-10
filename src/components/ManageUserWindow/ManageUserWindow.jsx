import React from 'react';
import USER_TIERS from '../../utils/constants/userTiers';
import { parseFirestoreDate, titleCaseSentence } from '../../utils/helperFunctions';

import './ManageUserWindow.scss';

const ManageUserWindow = ({selectedUser = {}, changeUserTier}) => {
    const {email, displayName, date, tier} = selectedUser;
    return (
        <div className = 'manageUserWindow'>
            <table>
                {
                    email &&
                    <thead>
                        
                        <tr>
                            <th>{email}</th>
                            <th>{displayName}</th>
                            <th>{parseFirestoreDate(date)}</th>
                            <th>
                                <select aria-label = 'tiers' name="tiers" id="tierList" value = {tier} onChange = {changeUserTier}>
                                    {
                                        Object.keys(USER_TIERS).map(tierChoice => (
                                            <option 
                                                key = {tierChoice} 
                                                value = {tierChoice}
                                            >
                                                {titleCaseSentence(tierChoice)}
                                            </option>
                                        ))
                                    }
                                </select>
                            </th>
                        </tr>
                    </thead>
                }
            </table>
        </div>
    )
};

export default ManageUserWindow;