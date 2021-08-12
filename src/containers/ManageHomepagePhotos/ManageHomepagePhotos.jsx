import React, { useState } from 'react';
import { COLLECTIONS } from '../../utils/firebase';
import FileList from '../FileList/FileList';

import UploadFile from '../UploadFile/UploadFile';


import './ManageHomepagePhotos.scss';

const ManageHomepagePhotos = () => {
    const [refresh, setRefresh] = useState(0);
    const refreshTrigger = () => setRefresh(refresh+1);
    return (
        <div className=''>
            <h1>Manage Homepage Files</h1>
            <div className=''>
                <UploadFile
                    path='homepageImages'
                    title='Upload Homepage Photos'
                    collection={COLLECTIONS.HOMEPAGE_PHOTOS}
                    acceptedType='image/*'
                    refreshTrigger = {refreshTrigger}
                />
                <FileList
                    collection={COLLECTIONS.HOMEPAGE_PHOTOS}
                    display
                    refresh={refresh}
                />
            </div>
        </div>
    );
};


export default ManageHomepagePhotos;