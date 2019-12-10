import React, { useState } from 'react';
import { Redirect } from "react-router-dom"
import "./NavBar.css"

import SpellSearch from '../3rdPartyAPI/SpellSearch.js'


const TableNavBar = ({ props, handleNavClick }) => {

  const [homeRedirect, setHomeRedirect] = useState(null)
  const [logoutRedirect, setLogoutRedirect] = useState(null)


  const handleHome = () => {
    setHomeRedirect(true)
  }
  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    // window.location.reload()
    setLogoutRedirect(true)
  }

  if (homeRedirect) {
    return <Redirect to={'/'} />
  }
  if (logoutRedirect) {
    return <Redirect to={'/'} />
  }

  return (
    <div className="nav">
      <div className="NavbarBanner">
        <div id="title">
          DM Helper
        </div>
        <div className="NavbarButtons">
          <div className="NavbarButton" onClick={handleHome}>MY TABLES</div>
          <SpellSearch />
          <div className="logout-pipe">
          |
          </div>
          <div className="logout-button" onClick={handleLogout}>LOG OUT</div>
        </div>
      </div>
    </div>

  );
}

export default TableNavBar;