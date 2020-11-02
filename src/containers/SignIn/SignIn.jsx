import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

import './SignIn.scss';

const SignIn = () => {
    return(
        <form className = 'signInSignUp__signIn'>
            <h1>I already have an account</h1>
            <h3>Sign in with your email and password</h3>
            <TextInput required text =  'email'/>
            <TextInput password required text = 'password' />
            <Button className = 'transparent medium whiteBorder'>Log In</Button>
            <Button className = 'transparent medium whiteBorder'>Google Log In</Button>
        </form>
    );
};

export default SignIn;