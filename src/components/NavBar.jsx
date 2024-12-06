import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>OZ무비</h1>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="search-input"
        />
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-link">
          로그인
        </Link>
        <Link to="/signup" className="navbar-link">
          회원가입
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
