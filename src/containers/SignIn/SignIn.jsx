import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import withForm from '../../utils/hocs/withForm';
import { googleSignIn } from '../../utils/firebase';

import './SignIn.scss';

const SignIn = ({handleChange, formState, handleSubmit}) => {
    return(
        <form className = 'signInSignUp__signIn'>
            <h1>I already have an account</h1>
            <h3>Sign in with your email and password</h3>
            <TextInput  
                name =  'signInEmail' 
                label = 'email' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <TextInput 
                password  
                name = 'signInPassword' 
                label = 'password' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <Button 
                className = 'transparent medium whiteBorder'
                
            >Log In</Button>
            <Button 
                className = 'transparent medium whiteBorder'
                op = {googleSignIn}    
            >Google Log In</Button>
        </form>
    );
};

export default withForm(SignIn);