import React, { useState } from 'react';
import { Redirect } from "react-router-dom"
import "../../App.css"

import SpellSearch from '../3rdPartyAPI/SpellSearch.js'


const TableNavBar = ({ props, handleNavClick }) => {

  const [homeRedirect, setHomeRedirect] = useState(null)
  const [logoutRedirect, setLogoutRedirect] = useState(null)
  const [NPCRedirect, setNPCRedirect] = useState(null)
  const [PlayerRedirect, setPlayerRedirect] = useState(null)


  const handleHome = () => {
    setHomeRedirect(true)
  }
  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
    setLogoutRedirect(true)
  }
  const handleCreateNPC = () => {
    if (NPCRedirect === null){
    setNPCRedirect(true)}
    else {
      setNPCRedirect(null)
    }
  }
  const handleCreatePlayer = () => {
    setPlayerRedirect(true)
  }

  if(homeRedirect){
    return <Redirect to={'/'}/>
  }
  if(logoutRedirect){
    return <Redirect to={'/'}/>
  }
  if(NPCRedirect){
    return <Redirect to={'/create-npc'}/>
  }
  if(PlayerRedirect){
    return <Redirect to={'/create-player'}/>
  }
  
  return (
    <nav className="nav">
      <div className="NavbarButtons">
      <button onClick={handleHome}><div>My Tables</div></button>
      <button onClick={handleCreateNPC}><div>Create NPC</div></button>
      <button onClick={handleCreatePlayer}><div>Create Player</div></button>
      <button onClick={handleLogout}><div>Logout</div></button>
      <SpellSearch/>
      </div>
    </nav>

  );
}


export default TableNavBar;