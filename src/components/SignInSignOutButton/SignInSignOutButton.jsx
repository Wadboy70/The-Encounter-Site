import React, { useContext } from 'react';

import { FirebaseUserContext } from '../../utils/context/user.context';
import { signOut } from '../../utils/firebase';
import ROUTES from '../../utils/routes';
import Button from '../Button/Button';

import './SignInSignOutButton.css';

const SignInSignOutButton = ({className = ''}) => {
    const [user, setUser] = useContext(FirebaseUserContext);
    const endSession = () => {
        signOut();
        setUser(null);
    };
    return(
        <>
            {
                user ? 
                <Button 
                    className = {`transparent whiteBorder small signInSignOut ${className}`}
                    op = {endSession}
                >
                    Sign Out
                </Button>
                :
                <Button 
                    className = {`transparent whiteBorder small signInSignOut  ${className}`}
                    link = {ROUTES.SIGN_IN_SIGN_UP.url}
                >
                    Sign In
                </Button>
            }  
        </>
    );
};
export default SignInSignOutButton;