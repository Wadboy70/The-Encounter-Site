import React from 'react';

import ManageEventSignUp from '../../containers/ManageEventSignUp/ManageEventSignUp';
import ManageUsers from '../../containers/ManageUsers/ManageUsers';
import withSpinner from '../../utils/hocs/withSpinner';
import withUserRedirect from '../../utils/hocs/withUserRedirect';

import './AdminPage.scss';

const AdminPage = () => {
    return(
        <div className = 'adminPage'>
            <ManageUsers/>
            <ManageEventSignUp/>
        </div>
    )
};

export default withUserRedirect(withSpinner(AdminPage));