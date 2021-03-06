import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { FirebaseUserContext } from '../context/user.context';
import ROUTES from '../../utils/routes';


const withUserRedirect = (Component) => ({redirectInfo:{url = ROUTES.HOME, property, expected = true}, ...props}) => {
    const [user] = useContext(FirebaseUserContext);
    if((user !== undefined) && property && (user?.[property] !== expected)){
        return(<Redirect to = {url}/>);
    }
    return <Component {...props}/>
};

export default withUserRedirect;