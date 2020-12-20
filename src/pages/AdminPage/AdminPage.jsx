import React from 'react';
import Button from '../../components/Button/Button';

import ManageEventSignUp from '../../containers/ManageEventSignUp/ManageEventSignUp';
import ManageUsers from '../../containers/ManageUsers/ManageUsers';
import withSpinner from '../../utils/hocs/withSpinner';
import withUserRedirect from '../../utils/hocs/withUserRedirect';
import {fileUpload} from '../../utils/firebase';

import './AdminPage.scss';

const AdminPage = () => {
    return(
        <div className = 'adminPage'>
            <ManageUsers/>
            <ManageEventSignUp/>
            <ManageTitheFile/>
        </div>
    )
};

const ManageTitheFile = () => (
    <form >
        <input type="file" onChange = {e => fileUpload(e.target.files[0], e.target.files[0].name)}/>
        <Button>Submit</Button>
    </form>
)

export default withUserRedirect(withSpinner(AdminPage));