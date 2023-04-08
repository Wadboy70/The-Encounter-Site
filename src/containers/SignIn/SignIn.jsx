import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import withForm from '../../utils/hocs/withForm';
import { googleSignIn, passwordSignIn } from '../../utils/firebase';
import ROUTES from '../../utils/routes';

import './SignIn.css';

const SignIn = ({handleChange, formState, setError}) => {
    const { error } = formState;
    const loginSubmit = async () => {
        setError(null);
        const { signInEmail = '', signInPassword = '' } = formState;
        const response = await passwordSignIn(signInEmail, signInPassword);
        if (response.message) {
            setError(response.message);
        }
    };

    return(
        <form className = 'signInSignUp__signIn'>
            <h1 className = 'signIn__title'>I already have an account</h1>
            <h3>Sign in with your email and password</h3>
            <TextInput  
                required
                name =  'signInEmail' 
                label = 'email' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <TextInput 
                required
                password  
                name = 'signInPassword' 
                label = 'password' 
                handleChange = { handleChange } 
                formState = { formState }
            />
            <div className = 'signIn__loginButtons'>
                <Button 
                    className = 'transparent medium whiteBorder'
                    op = {loginSubmit}
                >Login</Button>
                <Button 
                    className = 'transparent medium whiteBorder'
                    op = {googleSignIn}    
                >Google Login</Button>
                <Button 
                    className = 'transparent medium whiteBorder'
                    link = {ROUTES.FORGOT_PASSWORD.url} 
                >Forgot Password</Button>
                
            </div>
            {
                error &&
                <p className = 'errorMessage'>{error}</p>
            }
        </form>
    );
};

export default withForm(SignIn);