import React from 'react';
import { COLLECTIONS } from '../../utils/firebase';
import FileList from '../FileList/FileList';

import UploadFile from '../UploadFile/UploadFile';


import './ManageHomepagePhotos.scss';

const ManageHomepagePhotos = () => {
    return (
        <div className=''>
            <h1>Manage Homepage Files</h1>
            <div className=''>
                <UploadFile
                    path='homepageImages'
                    title='Upload Homepage Photos'
                    collection={COLLECTIONS.HOMEPAGE_PHOTOS}
                    acceptedType='image/*'
                />
                <FileList
                    collection={COLLECTIONS.HOMEPAGE_PHOTOS}
                    display
                />
            </div>
        </div>
    );
};


export default ManageHomepagePhotos;