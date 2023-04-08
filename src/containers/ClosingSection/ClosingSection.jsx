import React from 'react';

import DisplayBox from '../../components/DisplayBox/DisplayBox';
import ROUTES from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import './ClosingSection.css';

const ClosingSection = () => (
    <div className = 'closingSection'>
        <DisplayBox
            title = 'Contact Us'
            button = 'Contact'
            description = 'Reach out to our leadership!'
            buttonProps = {{link: ROUTES.CONTACT_US.url}}
            image = {imageUrls.contact}
            className = 'closingSection__display'
            justifyCenter
        />
        <DisplayBox
            title = 'Our Ministry Leaders'
            button = 'Find Out More'
            description = 'Read about the leaders of our ministry'
            buttonProps = {{link: ROUTES.ABOUT.url}}
            image = {imageUrls.leadersPhoto}
            className = 'closingSection__display'
            justifyCenter
        />
    </div>
)
export default ClosingSection;