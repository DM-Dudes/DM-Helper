import React from 'react';

function TableNavBar({ props, handleNavClick }) {
  return (
    <nav className="nav">
      <button><a className="nav-link" href="/create-npc">CREATE NPCS</a></button>
      <button><a className="nav-link" href="/create-player">CREATE PLAYER</a></button>
    </nav>

  );
}


export default TableNavBar;