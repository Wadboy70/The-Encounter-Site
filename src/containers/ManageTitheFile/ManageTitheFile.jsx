import React from 'react';

import TitheFileList from '../TitheFileList/TitheFileList';
import UploadFile from '../UploadFile/UploadFile';


import './ManageTitheFile.scss';

const ManageTitheFile = () => {
    return(
        <div className = 'manageTitheFile'>
            <h1>Manage Tithe Files</h1>
            <div className = 'manageTitheFile__sections'>
                <UploadFile/>
                <TitheFileList/>
            </div>
        </div>
    );
};


export default ManageTitheFile;