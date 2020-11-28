import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import ManageEvents from '../../containers/ManageEvents/ManageEvents';
import ManageUsers from '../../containers/ManageUsers/ManageUsers';
import withSpinner from '../../utils/hocs/withSpinner';
import withUserRedirect from '../../utils/hocs/withUserRedirect';

import './AdminPage.scss';

const AdminPage = () => {
    return(
        <div className = 'adminPage'>
            <ParticleBG className = 'adminPage__content' particleClassName = 'adminPage__particles'>
                <ManageUsers/>
                <ManageEvents/>
            </ParticleBG>
        </div>
    )
};

export default withUserRedirect(withSpinner(AdminPage));