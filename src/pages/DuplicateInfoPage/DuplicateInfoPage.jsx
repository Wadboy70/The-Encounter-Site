import React from 'react';

import EmailFormPage from '../../pages/EmailFormPage/EmailFormPage';

import './DuplicateInfoPage.scss';

const DuplicateInfoPage = ({info:{
    jumboImage,
    title = '',
    description = '',
    form,
    link
}}) => {
    return(
        <>
            <section className = 'duplicateInfoPage'>

            </section>
            {
                form &&
                <EmailFormPage formInfo = {form}/>
            }
        </>

    );
};

export default DuplicateInfoPage;