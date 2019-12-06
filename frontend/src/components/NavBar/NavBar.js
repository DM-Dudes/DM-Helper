import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom"


const HLNav = () => {

  const [homeRedirect, setHomeRedirect] = useState(null)
  const [logoutRedirect, setLogoutRedirect] = useState(null)
  const [tableRedirect, setTableRedirect] = useState(null)

  const handleHome = () => {
    setHomeRedirect(true)
  }
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
    <nav className="nav">
      <div className="NavbarButtons">
      <button onClick={handleCreateTable}><div>Create Table</div></button>
      <button onClick={handleLogout}><div>Logout</div></button>
      </div>
    </nav>

  );
}


export default HLNav;
