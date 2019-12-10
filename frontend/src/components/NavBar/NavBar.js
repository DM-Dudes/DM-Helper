import React, { useState } from 'react';
import { Redirect } from "react-router-dom"
import "./NavBar.css"


const HLNav = () => {

  const [logoutRedirect, setLogoutRedirect] = useState(null)
  const [tableRedirect, setTableRedirect] = useState(null)

  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
    setLogoutRedirect(true)
  }
  const handleCreateTable = () => {
    setTableRedirect(true)
  }

  if(tableRedirect){
    return <Redirect to={'/create-table'}/>
  }

  return (
    <div className="nav">
      <div className="NavbarBanner">
        <div id="title">DM Helper</div>
          <div className="NavbarButtons">
            <div className="NavbarButton" onClick={handleCreateTable}><div>CREATE TABLE</div></div>
            <div className="logout-button" onClick={handleLogout}>LOG OUT</div>      </div>
          </div>
    </div>

  );
}


export default HLNav;
