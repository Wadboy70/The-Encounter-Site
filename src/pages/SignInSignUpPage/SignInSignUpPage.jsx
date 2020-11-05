import React from 'react';

import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import ParticleBG from '../../components/ParticleBG/ParticleBG'

import './SignInSignUpPage.scss';

const SignInSignUpPage = () => {

    return(
        <div className = 'signInSignUp'>
            <ParticleBG className = 'signInSignUp__content' particleClassName = 'signInSignUp__particles'>
                <SignIn/>
                <SignUp/>
            </ParticleBG>
        </div>
    );
};

export default SignInSignUpPage;
