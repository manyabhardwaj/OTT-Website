import React, { useState } from 'react';
import "../index.css";
import Logo from "../Images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-menu">
          <div className="nav-item-active">
            <p className="p-large">Home</p>
          </div>

          <div className="nav-item">
            <p className="p-large text-gray">Movies & Shows</p>
          </div>

          <div className="nav-item">
            <p className="p-large text-gray">Subscriptions</p>
          </div>

          <div className="nav-item">
            <p className="p-large text-gray">Support</p>
          </div>
        </div>
        <button className="primary-btn">Sign In</button>
        <div className="hamburger-menu" onClick={toggleSidebar}>
        <GiHamburgerMenu size={30} className='hamburgerIcon '/>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-close" onClick={toggleSidebar}>
          <IoClose size={24}  className='CloseIcon'/>
          </div>
          <div className="sidebar-menu">
            <div className="nav-item-active">
              <p className="p-large">Home</p>
            </div>

            <div className="nav-item">
              <p className="p-large text-gray">Movies & Shows</p>
            </div>

            <div className="nav-item">
              <p className="p-large text-gray">Subscriptions</p>
            </div>

            <div className="nav-item">
              <p className="p-large text-gray">Support</p>
            </div>
            <button className="primary-btn">Sign In</button>
          </div>
        </div>
      )}
    </>
  );
}
