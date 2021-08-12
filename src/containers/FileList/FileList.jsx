import React, { useContext, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { deleteDoc, deleteFile, downloadFile, fileList, getAllDocs } from '../../utils/firebase';

import './FileList.scss';

const FileList = ({
    className = '',
    collection,
    display = false
}) => {
    const [files, setFiles] = useState(null);
    const [user] = useContext(FirebaseUserContext);
    const deleteItem = async (file) => {
        let warning = window.confirm('Are you sure you want to delete this file?');
        if (warning) {
            await deleteDoc(file.id, collection)
            await deleteFile(file.url);
            setFiles(null);
        }
    }
    useEffect(() => {
        let mounted = true;
        const list = async () => {
            let files = mounted ? (await getAllDocs(collection)) : null;
            setFiles(files);
        }
        if (!files) list();
        return () => mounted = false;
    }, [files, collection])
    return (
        <div className={`fileList ${className}`}>
            <h2>Files</h2>
            <ul>
                {
                    files &&
                    files?.map((file, index) => (
                        <li key={index} className='fileList__item'>
                            <span>
                                <Button
                                    op={() => window.open(file.url, '_blank')}
                                    className='transparent'
                                >
                                    ↓
                                </Button>
                            </span>
                            <span>
                                {
                                    display ?
                                        <img src={file.url} alt='yuh' />
                                        :
                                        file.url.match(/(?<=\/)\w*/)
                                }
                            </span>
                            {
                                user?.tier === USER_TIERS.ADMIN &&
                                <span>
                                    <Button
                                        className='transparent'
                                        op={() => deleteItem(file)}
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

export default FileList;