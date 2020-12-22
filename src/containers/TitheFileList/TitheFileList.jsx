import React, { useContext, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { deleteFile, downloadFile, fileList } from '../../utils/firebase';

import './TitheFileList.scss';

const TitheFileList = ({className = ''}) => {
    const [files, setFiles] = useState(null);
    const [user] = useContext(FirebaseUserContext);
    const handleDownload = async (fileName) => {
        let url = await downloadFile(`titheInfo/${fileName}`);
        if (url) window.open(url, '_blank');
    }
    const deleteItem = async (name) => {
        let warning = alert('Are you sure you want to delete this file?');
        if(warning){
            await deleteFile(`titheInfo/${name}`);
            setFiles(null);
        }
    }
    useEffect(()=>{
        let mounted = true;
        const list = async () => {
            console.log('lists')
            let files = mounted ? ( await fileList() ) : null;
            setFiles(files?.items || []);
        }
        if (!files) list();
        return () => mounted = false;
    }, [files])
    return(
        <div className = {`fileList ${className}`}>
            <h2>Tithe Files</h2>
            <ul>
                {
                    files &&
                    files?.map((file, index) => (
                        <li key = { index } className = 'fileList__item'>
                            <span>
                                <Button 
                                    op = { () => handleDownload(file.name) }
                                    className = 'transparent'
                                >
                                    ↓
                                </Button>
                            </span>
                            <span>
                                {file.name}
                            </span>
                            {
                                user?.tier === USER_TIERS.ADMIN &&
                                <span>
                                    <Button 
                                        className = 'transparent'
                                        op = { () => deleteItem(file.name) }
                                    >
                                        X
                                    </Button>
                                </span>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TitheFileList;