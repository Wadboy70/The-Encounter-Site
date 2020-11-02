import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

import './SignUp.scss';

const SignUp = () => {

    return (
        <form className = 'signInSignUp__signUp'>
            <h1>I don't have an account</h1>
            <h3>Sign up with your email and password</h3>
            <TextInput required text = 'name'/>
            <TextInput required text = 'email'/>
            <TextInput required text = 'password'/>
            <TextInput required text = 'confirm password'/>
            <Button>Sign Up</Button>
        </form>
    );
}

export default SignUp;