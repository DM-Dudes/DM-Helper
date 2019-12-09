import React, { useState } from 'react';
import { Redirect } from "react-router-dom"


const HLNav = () => {

  // const [logoutRedirect, setLogoutRedirect] = useState(null)
  const [tableRedirect, setTableRedirect] = useState(null)

  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
    // setLogoutRedirect(true)
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
      <button className="button2" onClick={handleCreateTable}><div><span>Create Table</span></div></button>
      <button className="button2" onClick={handleLogout}><div><span>Logout</span></div></button>
      </div>
    </nav>

  );
}


export default HLNav;
