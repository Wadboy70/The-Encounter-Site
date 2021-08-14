import React, { useContext } from 'react';

import imageUrls from '../../assets/imageUrls';
import Button from '../../components/Button/Button';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import FileList from '../../containers/FileList/FileList';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as Phone } from '../../assets/images/cell.svg';
import { ReactComponent as Computer } from '../../assets/images/computer.svg';

import './GivingPage.scss';
import { COLLECTIONS } from '../../utils/firebase';

const GivingPage = () => {
    const [user] = useContext(FirebaseUserContext);
    return (
        <div className='givingPage'>
            <Jumbotron
                image={imageUrls.tithing}
                title='Make a Gift'
            />
            <div className='givingPage__givingContent'>
                <p className='givingContent__description'>
                    Your generosity is positively changing lives in this ministry, community, and globally. The Apostle Paul reminds us in 2 Corinthians 9:6-8, that whoever sows sparingly will reap sparingly and whosoever sows generously will reap generously. As you generously sow into this work, it is God's covenant promise to multiply back to you what has been given. We want you to know that your seed creates resources for us to carry God's love to the nations.
                </p>
                <div className='givingContent__waysToGive'>
                    <div className='waysToGive__giveColumn'>
                        <Mail className='giveColumn__icon' />
                        <h2 className='giveColumn__title'>GIVE BY MAIL</h2>
                        <div className='giveColumn__content'>
                            <p className='giveColumn__description'>Send your donation to:</p>
                            <br />
                            <p className='giveColumn__description'>10701 Cross Creel Blvd.  Unit 101 Tampa, Florida 33647</p>
                        </div>
                    </div>
                    <div className='waysToGive__giveColumn'>
                        <Computer className='giveColumn__icon' />
                        <h2 className='giveColumn__title'>GIVE ONLINE</h2>
                        <div className='giveColumn__content'>
                            <Button
                                className='purple medium givingContent__button'
                                anchor='https://www.givelify.com/givenow/1.0/NzExOTk=/selection'
                            >
                                Make a Gift Today
                            </Button>
                        </div>
                    </div>
                    <div className='waysToGive__giveColumn'>
                        <Phone className='giveColumn__icon' />
                        <h2 className='giveColumn__title'>GIVE BY APP</h2>
                        <div className='giveColumn__content'>
                            <ul className='giveColumn__appInstructions'>
                                <li>1. Download Ministry One App</li>
                                <li>2. Search for our church</li>
                                <li>3. Click "Giving" Icon</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {
                    user && user?.tier !== USER_TIERS.MEMBER &&
                    <FileList
                        className='givingPage__titheFileList'
                        collection={COLLECTIONS.TITHE}
                    />
                }
            </div>
        </div>

    );
};

export default GivingPage;