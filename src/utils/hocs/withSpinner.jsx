import React from 'react';
import { useContext } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { FirebaseUserContext } from '../context/user.context';

const withSpinner = (Component) => () => {
    const [user] = useContext(FirebaseUserContext);
    return (user === undefined) ? <Spinner/> : <Component/>;
};

export default withSpinner;