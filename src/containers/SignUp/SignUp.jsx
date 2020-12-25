import React, { useContext, useEffect, useState } from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import withForm from '../../utils/hocs/withForm';
import { createPasswordAcc } from '../../utils/firebase';

import './SignUp.scss';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../utils/routes';

const SignUp = ({handleChange, formState, setError}) => {
    const { error } = formState;
    const [canView, setCanView] = useState(true);
    const [user] = useContext(FirebaseUserContext);
    const signUpSubmit = async () => {
        setCanView('waiting');
        const { signUpEmail = '', signUpPassword = '', signUpConfirmPassword = '', signUpName = ''} = formState;
        if(signUpPassword !== signUpConfirmPassword) {
            setError('Passwords don\'t match!');
            setCanView(true);
        }
        else {
            const response = await createPasswordAcc(signUpEmail, signUpPassword, signUpName);
            if(response?.message) setError(response.message);
            setCanView(false);
        }
        
    }
    useEffect(()=>{
        if(user && canView !== 'waiting') setCanView(false);;
    },[setCanView, canView, user])
    return (
        canView ? 
        <form className = 'signInSignUp__signUp'>
            <h1 className = 'signUp__title'>I don't have an account</h1>
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
        </form> : 
        <Redirect to = { ROUTES.HOME.url }/>
    );
}

export default withForm(SignUp);