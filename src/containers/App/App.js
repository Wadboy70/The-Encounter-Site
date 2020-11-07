import React, { useState, useEffect, useContext } from 'react';

import { Route, Redirect } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import HomePage from '../../pages/HomePage/HomePage';
import SignInSignUpPage from '../../pages/SignInSignUpPage/SignInSignUpPage';
import AdminPanel from '../../pages/AdminPage/AdminPage';
import Footer from '../../containers/Footer/Footer';
import { auth, addNewUser, getUserInfo } from '../../utils/firebase';
import { FirebaseUserContext } from '../../utils/context/user.context'
import * as ROUTES from '../../utils/routes';

import './App.scss';
import USER_TIERS from '../../utils/constants/userTiers';
import USER_OBJECT_STRUCTURE from '../../utils/constants/userObjectStructure';

function App() {

  //mobile sideDrawer functionality
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  //initializing user from firebase
  const [user, setUser] = useContext(FirebaseUserContext);
  
  useEffect(() => {
    auth.onAuthStateChanged(async (userVal) => {
      if(userVal && user === undefined) {
        console.log('logging In')
        addNewUser(userVal);
        setUser(await getUserInfo(userVal.uid));
      }
    })
  })

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
      <Route 
        exact 
        path = {ROUTES.SIGN_IN_SIGN_UP.url} 
        render = {() => user ? (<Redirect to = {ROUTES.HOME.url}/>) : (<SignInSignUpPage/>)}
      />
      <Route 
        exact 
        path = {ROUTES.ADMIN_PANEL.url} 
        render = {() =>   (<AdminPanel 
          redirectInfo = {{
            url: ROUTES.ADMIN_PANEL, 
            expected: USER_TIERS.ADMIN, 
            property: USER_OBJECT_STRUCTURE.TIER
          }}
        />) }
      />
      <Footer/>
    </div>
  );
}

export default App;
