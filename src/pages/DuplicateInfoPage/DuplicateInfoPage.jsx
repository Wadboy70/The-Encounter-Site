import React from 'react';
import Button from '../../components/Button/Button';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

import FormSection from '../../containers/FormSection/FormSection';

import './DuplicateInfoPage.css';

const DuplicateInfoPage = ({info:{
    jumboImage,
    title = '',
    caption,
    description,
    form,
    link
}}) => {
    let buttonProps = {[link?.type]: link?.to};
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
                    description.map((text, index) =>
                        <p className = 'duplicateContent__description' key = {index}>{text}</p>
                    )
                }
                {
                    link &&
                    <Button 
                        className = 'yellowBG large duplicateContent__button'
                        {...buttonProps}
                    >
                        {link.buttonContent}
                    </Button>
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