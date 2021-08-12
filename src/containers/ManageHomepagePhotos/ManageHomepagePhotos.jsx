import React from 'react';
import { COLLECTIONS } from '../../utils/firebase';

import UploadFile from '../UploadFile/UploadFile';


import './ManageHomepagePhotos.scss';

const ManageHomepagePhotos = () => {
    return(
        <div className = ''>
            <h1>Manage Homepage Files</h1>
            <div className = ''>
                <UploadFile
                    path='homepageImages'
                    title='Upload Homepage Photos'
                    collection={COLLECTIONS.HOMEPAGE_PHOTOS}
                />
            </div>
        </div>
    );
};


export default ManageHomepagePhotos;