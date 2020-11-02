import React, { useState, useEffect, useContext } from 'react';

import { Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import HomePage from '../../pages/HomePage/HomePage';
import SignInSignUpPage from '../../pages/SignInSignUpPage/SignInSignUpPage';
import Footer from '../../containers/Footer/Footer';
import { auth, signOut } from '../../utils/firebase';
import { FirebaseUserContext } from '../../utils/context/user.context'
import * as ROUTES from '../../utils/routes';

import './App.scss';

function App() {

  //mobile sideDrawer functionality
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  //initializing user from firebase
  const [user, setUser] = useContext(FirebaseUserContext);
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((userVal) => {
      if(userVal) setUser(userVal)
    })
    return () => {
      signOut();
    }
  }, [setUser])

  return (
    <div className="App">
      <SideDrawer
        drawerToggleHandler = {drawerToggleHandler}
        drawerOpen = {drawerOpen}
      />
      <Navigation
        drawerToggleHandler = {drawerToggleHandler}
        drawerOpen = {drawerOpen}
      />
      <Route exact path = {ROUTES.HOME.url} component = {HomePage}/>
      <Route exact path = {ROUTES.SIGN_IN_SIGN_UP.url} component = {SignInSignUpPage}/>
      <Footer/>
    </div>
  );
}

export default App;
