import React, { useContext, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { deleteFile, fileList } from '../../utils/firebase';

import './TitheFileList.scss';

const TitheFileList = () => {
    const [files, setFiles] = useState(null);
    const [user] = useContext(FirebaseUserContext);
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
    const deleteItem = async (name) => {
        let warning = alert('Are you sure you want to delete this file?');
        if(warning){
            await deleteFile(`titheInfo/${name}`);
            setFiles(null);
        }
    }
    return(
        <div className = 'manageTitheFile__fileList'>
            <ul>
                {
                    files &&
                    files?.map((file, index) => (
                        <li key = { index } className = 'fileList__item'>
                            <span>
                                {file.name}
                            </span>
                            {
                                user?.tier !== USER_TIERS.MEMBER &&
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