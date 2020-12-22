import React, { useContext } from 'react';

import imageUrls from '../../assets/imageUrls';
import Button from '../../components/Button/Button';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import TitheFileList from '../../containers/TitheFileList/TitheFileList';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';

import './GivingPage.scss';

const GivingPage = () => {
    const [user] = useContext(FirebaseUserContext);
    return(
        <div className = 'givingPage'>
                <Jumbotron 
                    image = { imageUrls.tithing }
                    title = 'Make a Gift'
                />
            <div className = 'givingPage__duplicateContent'>
                <p className = 'duplicateContent__description'>
                    Your generosity is positively changing lives in this ministry, community, and globally. The Apostle Paul reminds us in 2 Corinthians 9:6-8 that whoever sows sparingly will reap sparingly and whosoever sows generously will reap generously. As you generously sow into this work, it is Gods covenant promise to multiply back to you what has been given. We want you to know that your seed creates resources for us to carry Gods love to the nations
                </p>
                <Button 
                    className = 'yellowBG medium duplicateContent__button'
                    anchor = 'https://www.givelify.com/givenow/1.0/NzExOTk=/selection'
                >
                    Make a gift    
                </Button>
                {
                    user && user?.tier !== USER_TIERS.MEMBER &&
                    <TitheFileList className = 'givingPage__titheFileList'/>
                }
            </div>
        </div>

    );
};

export default GivingPage;