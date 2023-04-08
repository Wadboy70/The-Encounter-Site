import React from 'react';

import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';

import './SignInSignUpPage.css';

const SignInSignUpPage = () => {

    return(
        <div className = 'signInSignUp'>
            <SignUp/>
            <SignIn/>
        </div>
    );
};

export default SignInSignUpPage;
