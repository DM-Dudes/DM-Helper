import React from 'react';
import { Link } from 'react-router-dom';
import SpellSearch from '../3rdPartyAPI/SpellSearch.js'


function HLNav() {
  const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
  }
  return (
    <nav className="nav">
      <button><a className="nav-link nav-button" href="/">HOME</a></button>
      <Link to='/'><button onClick={logout} >LOGOUT</button></Link>
      <SpellSearch/>
    </nav>

  );
}


export default HLNav;
