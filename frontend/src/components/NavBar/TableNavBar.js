import React from 'react';
import { Link, onClick } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

function TableNavBar({ props, handleNavClick }) {
  console.log(props)
  return (
    <nav className="nav">
      <button><a className="nav-link" href="/create-npc">CREATE NPCS</a></button>
      <button><a className="nav-link" href="/create-player">CREATE PLAYER</a></button>
    </nav>

  );
}


export default TableNavBar;