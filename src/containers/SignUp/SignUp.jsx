import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import withForm from '../../utils/hocs/withForm';
import { createPasswordAcc } from '../../utils/firebase';

import './SignUp.scss';

const SignUp = ({handleChange, formState, setError}) => {
    const { error } = formState;

    const signUpSubmit = async () => {
        const { signUpEmail = '', signUpPassword = '', signUpConfirmPassword = '' } = formState;
        if(signUpPassword !== signUpConfirmPassword) setError('Passwords don\'t match!');
        else {
            const response = await createPasswordAcc(signUpEmail, signUpPassword);
            if(response.message) setError(response.message);
        }

    }
    return (
        <form className = 'signInSignUp__signUp'>
            <h1>I don't have an account</h1>
            <h3>Sign up with your email and password</h3>
            <TextInput  
                required
                name =  'signUpName' 
                label = 'name' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <TextInput  
                required
                name =  'signUpEmail' 
                label = 'email' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <TextInput  
                required
                password
                name =  'signUpPassword' 
                label = 'password' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <TextInput  
                required
                password
                name =  'signUpConfirmPassword' 
                label = 'confirm password' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <Button 
                className = 'transparent whiteBorder medium'
                op = { signUpSubmit }
            >Sign Up</Button>
            {
                error &&
                <p>{error}</p>
            }
        </form>
    );
}

export default withForm(SignUp);