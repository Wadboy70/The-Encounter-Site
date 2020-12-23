import React from 'react';

import DisplayBox from '../../components/DisplayBox/DisplayBox';
import ROUTES from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import './ClosingSection.scss';

const ClosingSection = () => (
    <div className = 'closingSection'>
        <DisplayBox
            title = 'Contact Us'
            button = 'Contact'
            description = 'Reach out to our leadership!'
            buttonProps = {{link: ROUTES.CONTACT_US.url}}
            image = {imageUrls.contact}
            className = 'closingSection__display'
        />
        <DisplayBox
            title = 'Our Ministry Leaders'
            button = 'Find Out More'
            description = 'Read about the leaders of our ministry'
            buttonProps = {{link: ROUTES.LEADERSHIP.url}}
            image = {imageUrls.leadersPage}
            className = 'closingSection__display'
        />
    </div>
)
export default ClosingSection;