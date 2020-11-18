import React, { useState, useEffect, useContext } from 'react';

import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import HomePage from '../../pages/HomePage/HomePage';
import SignInSignUpPage from '../../pages/SignInSignUpPage/SignInSignUpPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import AdminPanel from '../../pages/AdminPage/AdminPage';
import Footer from '../../containers/Footer/Footer';
import { auth, addNewUser, getUserInfo } from '../../utils/firebase';
import { FirebaseUserContext } from '../../utils/context/user.context'
import * as ROUTES from '../../utils/routes';

import './App.scss';
import USER_TIERS from '../../utils/constants/userTiers';
import USER_OBJECT_STRUCTURE from '../../utils/constants/userObjectStructure';
import LeaderPage from '../../pages/LeaderPage/LeaderPage';
import EmailFormPage from '../../pages/EmailFormPage/EmailFormPage';
import validEmails from '../../utils/constants/validEmails';

function App({history}) {

  //mobile sideDrawer functionality
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  //initializing user from firebase
  const [user, setUser] = useContext(FirebaseUserContext);
  
  //check if logged in
  useEffect(() => {
    auth.onAuthStateChanged(async (userVal) => {
      if(userVal && user === undefined) {
        console.log('logging In')
        addNewUser(userVal);
        setUser(await getUserInfo(userVal.uid));
      }
    })
  })

  //onRouteChange
  useEffect(() => {
    history.listen(() => {
      setDrawerOpen(false);
      window.scrollTo({top: 0});
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
      <Switch>
        <Route exact path = {ROUTES.HOME.url} component = {HomePage}/>
        <Route 
          exact 
          path = {ROUTES.SIGN_IN_SIGN_UP.url} 
          render = {() => user ? (<Redirect to = {ROUTES.HOME.url}/>) : (<SignInSignUpPage/>)}
        />
        <Route exact path = {ROUTES.ADMIN_PANEL.url}>
          <AdminPanel 
            redirectInfo = {{
              url: ROUTES.ADMIN_PANEL, 
              expected: USER_TIERS.ADMIN, 
              property: USER_OBJECT_STRUCTURE.TIER
            }}
          />
        </Route>
        <Route exact path = {ROUTES.ABOUT.url} component = {AboutPage}/>
        <Route exact path = {ROUTES.ABOUT.url + '/:leaderName'} component = {LeaderPage}/>
        <Route exact path = {ROUTES.PRAYER_REQUESTS.url}>
          <EmailFormPage 
            formName = {ROUTES.PRAYER_REQUESTS.name}
            to = {validEmails.PRAYER_REQUEST_EMAIL}
          />
        </Route>
        <Route path = '*'>404 Page Not Found</Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
