import React from 'react';
import './Header.css';
import logo from './로고.png';
import logotext from './쇼핑몰이름.png';
import hamburger from './햄버거버튼.png';



function Header()  {
      return (
        <header>
          <div className='logo'>
          <img src={logo}></img>
          <img src={logotext}></img>
          </div>
          <img src={hamburger} className='hamburger'></img>
          <div className="content">
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  </div>
          </header>
      );
    }
    export default Header;

  