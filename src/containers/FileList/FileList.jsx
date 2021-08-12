import React, { useContext, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { deleteDoc, deleteFile, getAllDocs, updateDoc } from '../../utils/firebase';
import { sortFiles } from '../../utils/helperFunctions';

import './FileList.scss';

const FileList = ({
    className = '',
    collection = '',
    display = false,
    refresh
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
    };
    const reorder = async (dir, index) => {
        let switchVal = index + dir;
        if(switchVal < 0 || switchVal >= files.length) return;
        await updateDoc(files[index]?.id, {order: switchVal}, collection);
        await updateDoc(files[switchVal]?.id, {order: index}, collection);
        setFiles(null);
    }
    useEffect(()=>{
        setFiles(null);
    },[refresh])
    useEffect(() => {
        let mounted = true;
        const list = async () => {
            let files = mounted ? (await getAllDocs(collection, sortFiles)) : null;
            files.forEach(async (file, i)=>{
                if(file.order !== i) await updateDoc(file.id, {order: i}, collection)
            });
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
                    files?.map((file, index) => {
                        let name = file.url.match(/(?<=\/)\w*/);
                        return(
                            <li key={index} className='fileList__item'>
                                <span>
                                    <Button
                                        op={() => window.open(file.url, '_blank')}
                                        className='transparent'
                                    >
                                        Download
                                    </Button>
                                </span>
                                <span>
                                    {
                                        display ?
                                        <img src={file.url} alt={name} />
                                        :
                                        name
                                    }
                                </span>
                                {
                                    user?.tier === USER_TIERS.ADMIN &&
                                    <>
                                        <span>
                                            <Button
                                                className='transparent'
                                                op={() => deleteItem(file)}
                                            >
                                                X
                                            </Button>
                                        </span>
                                        <span>
                                            <Button 
                                                className='transparent arrow' 
                                                op={()=>reorder(-1, index)}
                                            >
                                                ↑
                                            </Button>
                                        </span>
                                        <span>
                                            <Button 
                                                className='transparent arrow'
                                                op={()=>reorder(1, index)}
                                            >
                                                ↓
                                            </Button>
                                        </span>
                                    </>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default FileList;