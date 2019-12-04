import React from 'react';
import { Link, onClick } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
function AppNav({ handleNavClick }) {
  const logout = () => {
    console.log('not working')
    localStorage.clear()
    window.location.reload()
  }
  return (
    <nav className="nav">
      <button><a className="nav-link nav-button" href="/">HOME</a></button>
      <button><a className="nav-link" href="/">CREATE TABLE</a></button>
      <button><a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">CREATE NPCS</a></button>
      <button><a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">CREATE PLAYER</a></button>
      <Link to='/'><button onClick={logout} >LOGOUT</button></Link>
    </nav>

  );
}


export default AppNav;
{/* <Link key={i} to={`/${navItem.value}/`}>{navItem.label}| </Link> */}
//     <button>
//       {createNavItems()}
//     </button>
//   </div>
// </div>