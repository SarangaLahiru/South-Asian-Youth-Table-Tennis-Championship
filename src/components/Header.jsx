// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Mail, User, Inbox, Menu, Delete } from 'react-feather';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Use useLocation hook to get current location
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="p-0 flex h-50 w-full relative overflow-hidden header">
        <div className="basis-1/3 transform -skew-x-12 title">
          <h2 className="text-6xl">tennise</h2>
        </div>

        <div className="contacts">
          <div className="flex space-x-24 items-center details">
            <div className="flex items-center space-x-2">
              <div className="dis">
                <h2 className="text-base">Email</h2>
                <p className="text-sm">dfs@example.com</p>
              </div>
              <Mail className="h-8 w-8 text-blue-500 icon" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="dis">
                <h2 className="text-base">Email</h2>
                <p className="text-sm">dfs@example.com</p>
              </div>
              <Inbox className="h-8 w-8 text-blue-500 icon" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="dis">
                <h2 className="text-base">Email</h2>
                <p className="text-sm">dfs@example.com</p>
              </div>
              <User className="h-8 w-8 text-blue-500 icon" />
            </div>
          </div>
          <ul className="flex lg:space-x-20 md:space-x-2 text-2xl list ">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/register" className={location.pathname === '/register' ? 'active-link' : ''}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/register" className={location.pathname === '/register' ? 'active-link' : ''}>
                Register
              </Link>
            </li>
          </ul>
        </div>
        <button className="focus:outline-none btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <Delete className="icon1" /> : <Menu className="icon1" />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <ul className="lg:space-x-20 md:space-x-2 text-3xl box1">
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/register">Register</Link></li>
        
      </ul>
        
        
        )}
    </>
  );
};

export default Header;
