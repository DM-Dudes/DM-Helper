import React from 'react';
import { Link, onClick } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

function HLNav({ handleNavClick }) {
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
{/* <Link key={i} to={`/${navItem.value}/`}>{navItem.label}| </Link> */}
//     <button>
//       {createNavItems()}
//     </button>
//   </div>
// </div>