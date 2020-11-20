import React from 'react';
import EmailFormPage from '../EmailFormPage/EmailFormPage';

import * as ROUTES from '../../utils/routes';
import validEmails from '../../utils/constants/validEmails';

import './PrayerRequestPage.scss';

const PrayerRequestPage = () => (
    <EmailFormPage
        formName = {ROUTES.PRAYER_REQUESTS.name}
        to = {validEmails.PRAYER_REQUEST_EMAIL}
    >

    </EmailFormPage>
);

export default PrayerRequestPage;