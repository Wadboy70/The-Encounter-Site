import React from 'react';
import Button from '../../components/Button/Button';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

import FormSection from '../../containers/FormSection/FormSection';

import './DuplicateInfoPage.scss';

const DuplicateInfoPage = ({info:{
    jumboImage,
    title = '',
    caption,
    description = '',
    form,
    link
}}) => {
    return(
        <div className = 'duplicateInfoPage'>
            {
                jumboImage && 
                <Jumbotron image = {jumboImage} title = {title} caption = {caption}/>
            }
            {
                !jumboImage &&
                <h1>{title.toUpperCase()}</h1>
            }
            <div className = 'duplicateInfoPage__duplicateContent'>
                {
                    description && 
                    <p className = 'duplicateContent__description'>{description}</p>
                }
                {
                    link &&
                    <Button className = 'yellowBG medium duplicateContent__button'>{link.buttonContent}</Button>
                }
                {
                    form &&
                    <FormSection formInfo = {form}/>
                }
            </div>
        </div>

    );
};

export default DuplicateInfoPage;