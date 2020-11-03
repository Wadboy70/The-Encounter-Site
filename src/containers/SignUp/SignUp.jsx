import React from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

import './SignUp.scss';
import withForm from '../../utils/hocs/withForm';

const SignUp = ({handleChange}) => {

    return (
        <form className = 'signInSignUp__signUp'>
            <h1>I don't have an account</h1>
            <h3>Sign up with your email and password</h3>
            <TextInput required text = 'name' handleChange = {handleChange}/>
            <TextInput required text = 'email' handleChange = { handleChange }/>
            <TextInput required text = 'password' handleChange = { handleChange }/>
            <TextInput required text = 'confirm password' handleChange = { handleChange }/>
            <Button className = 'transparent whiteBorder medium' >Sign Up</Button>
        </form>
    );
}

export default withForm(SignUp);