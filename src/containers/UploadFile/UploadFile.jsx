import React, { useEffect, useState } from 'react'

import Button from '../../components/Button/Button';
import { addNewDoc, downloadFile, fileUpload } from '../../utils/firebase';

import './UploadFile.css'

const UploadFile = ({
    path = '',
    title = '',
    collection = '',
    acceptedType,
    refreshTrigger = ()=>{}
}) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormChange = e => {
        setFile(e.target.files[0]);
        setError(null);
    }

    const handleSubmitFile = async () => {
        setError(null);
        if (file) {
            let value = await fileUpload(file, file.name, path);
            if (value?.metadata?.fullPath) {
                await addNewDoc(
                    {
                        path: value.metadata.fullPath,
                        url: await downloadFile(value.metadata.fullPath)
                    },
                    collection
                );
                setFormSubmitted(true);
                refreshTrigger();
            } else {
                setError('File Upload failed')
            }
        } else {
            setError('You haven\'t added a file!');
        }
    }

    useEffect(() => {
        if (formSubmitted) {
            setTimeout(() => setFormSubmitted(false), 3000);
        }
    }, [formSubmitted])
    return (
        <div className='uploadFile'>
            <h2>{title}</h2>
            <form className='uploadFile__form'>
                <input
                    type="file"
                    accept={acceptedType ? acceptedType : ''}
                    onChange={handleFormChange}
                />
                <Button
                    className='whiteBorder small transparent'
                    op={handleSubmitFile}
                >
                    Submit
                </Button>
            </form>
            {
                formSubmitted &&
                <p>File has been uploaded!</p>
            }
            {
                error &&
                <p> {error} </p>
            }
        </div>
    )
};

export default UploadFile;