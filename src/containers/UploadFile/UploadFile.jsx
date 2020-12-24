import React, { useState } from 'react'

import Button from '../../components/Button/Button';
import {fileUpload } from '../../utils/firebase';

import './UploadFile.scss'

const UploadFile = () => {
    
    const [file, setFile] = useState(null);
    const [error , setError] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormChange = e => {
        setFile(e.target.files[0]);
        setError(null);
    }
    
    const handleSubmitFile = () => {
        setError(null);
        if(file) {
            fileUpload(file, file.name);
            setFormSubmitted(true);
        } else {
            setError('You haven\'t added a file!');
        }
    }
    return(
        <div className = 'uploadFile'>
            <h2>Upload Tithe Files</h2>
            {
                formSubmitted ? 
                <p>Tithe Document has been added!</p> :
                <form className = 'uploadFile__form'>
                    <input 
                        type="file" 
                        onChange = {handleFormChange}
                    />
                    <Button 
                        className = 'whiteBorder small transparent' 
                        op = { handleSubmitFile }
                    >
                        Submit
                    </Button>
                </form>
            }
            {
                error &&
                <p> { error } </p>
            }
        </div>
    )
};

export default UploadFile;