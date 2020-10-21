import React, { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import './App.scss';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };
  const siteMap = ['Home', 'About', 'Live Sermon', 'Calendar', 'Prayer Request'];

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
    </div>
  );
}

export default App;
