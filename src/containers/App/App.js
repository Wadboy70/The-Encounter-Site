import React, { useState } from 'react';

import { Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import HomePage from '../../pages/HomePage/HomePage';
import './App.scss';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };
  const siteMap = ['About', 'Live Sermon', 'Calendar', 'Prayer Request', 'Contact Us'];

  return (
    <div className="App">
      <SideDrawer
        drawerToggleHandler = {drawerToggleHandler}
        drawerOpen = {drawerOpen}
        siteMap = {siteMap}
      />
      <Navigation
        drawerToggleHandler = {drawerToggleHandler}
        drawerOpen = {drawerOpen}
        siteMap = {siteMap}
      />
      <Route exact path = '/'>
        <HomePage/>
      </Route>
    </div>
  );
}

export default App;
