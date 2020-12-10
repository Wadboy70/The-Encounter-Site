import React from 'react';
import EmailFormPage from '../EmailFormPage/EmailFormPage';

import ROUTES from '../../utils/routes';
import validEmails from '../../utils/constants/validEmails';

import './ContactPage.scss';

const ContactPage = () => (
    <EmailFormPage
        formName = {ROUTES.CONTACT_US.name}
        to = {validEmails.DEFAULT_EMAIL}
    >

    </EmailFormPage>
);

export default ContactPage;