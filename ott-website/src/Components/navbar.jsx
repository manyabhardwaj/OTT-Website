import React from 'react'
import "../index.css";
import Logo from "../Images/Logo.png";

export default function Navbar() {
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
      </div>
    </>
  )
}
