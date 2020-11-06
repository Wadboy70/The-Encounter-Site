import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import ManageUsers from '../../containers/ManageUsers/ManageUsers';

import './AdminPage.scss';

const AdminPage = () => {
    return(
        <div className = 'adminPage'>
            <ParticleBG className = 'adminPage__content' particleClassName = 'adminPage__particles'>
                <ManageUsers/>
            </ParticleBG>
        </div>
    )
};

export default AdminPage;