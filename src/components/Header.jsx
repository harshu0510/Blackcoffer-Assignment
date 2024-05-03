import React from 'react'
import './Header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';


function Header() {
  return (
    <header id='header' className="header fixed-top d-flex align-items-center">
        {/* {logo} */}
        <Logo/>
        {/* {search bar} */}
        <SearchBar/>
        {/* {nav} */}
        <NavBar/>
    </header>
  );
}

export default Header;
