import React from 'react';
import { Link } from 'react-router-dom';



function HLNav() {
  const logout = () => {
    console.log('not working')
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
  }
  return (
    <nav className="nav">
      <button><a className="nav-link nav-button" href="/">HOME</a></button>
      <Link to='/'><button onClick={logout} >LOGOUT</button></Link>
    </nav>

  );
}


export default HLNav;
