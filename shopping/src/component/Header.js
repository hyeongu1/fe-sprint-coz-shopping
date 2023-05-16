import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './로고.png';
import logotext from './쇼핑몰이름.png';
import hamburger from './햄버거버튼.png';



function Header(props)  {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

      return (
        <header>
         <Link to = "/">
          <div className='logo'>
          <img src={logo}></img>
          <img src={logotext}></img>
          </div>
          </Link>
          <img src={hamburger} className='hamburger' onClick={dropdownHandler}></img>
          {isOpen && (
          <div className="content">
    <ul>
      <li>OOO님, 안녕하세요!</li>
      <li>상품리스트 페이지</li>
      <li>북마크 페이지</li>
      
    </ul>
  </div>
          )}
          </header>
      );
    }
    export default Header;

  