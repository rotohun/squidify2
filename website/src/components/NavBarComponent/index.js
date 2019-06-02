import React from 'react';

class NavBar extends React.Component {
  render(){
    return (
      <header>
        <nav>
          <li>Dashboard</li>
          <li>Songs</li>
          <li>Help</li>
        </nav>
      </header>
    );
  }
}

export default NavBar;