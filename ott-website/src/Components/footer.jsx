import React from 'react'
import "../index.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-menu">
            <h5>Home</h5>
            <div className="footer-links">
              <a href="#"><h6 className="text-gray">Categories</h6></a>
              <a href="#"><h6 className="text-gray">Devices</h6></a>
              <a href="#"><h6 className="text-gray">Pricing</h6></a>
              <a href="#"><h6 className="text-gray">FAQ</h6></a>
            </div>
          </div>
          <div className="footer-menu">
            <h5>Movies</h5>
            <div className="footer-links">
              <a href="#"><h6 className="text-gray">Genres</h6></a>
              <a href="#"><h6 className="text-gray">Trending</h6></a>
              <a href="#"><h6 className="text-gray">Popular</h6></a>
            </div>
          </div>
          <div className="footer-menu">
            <h5>Shows</h5>
            <div className="footer-links">
              <a href="#"><h6 className="text-gray">Genres</h6></a>
              <a href="#"><h6 className="text-gray">Trending</h6></a>
              <a href="#"><h6 className="text-gray">Popular</h6></a>
            </div>
          </div>
          <div className="footer-menu">
            <h5>Subscription</h5>
            <div className="footer-links">
              <a href="#"><h6 className="text-gray">Plans</h6></a>
              <a href="#"><h6 className="text-gray">Features</h6></a>
            </div>
          </div>
          <div className="footer-menu">
            <h5>Support</h5>
            <div className="footer-links">
              <a href="#"><h6 className="text-gray">Contact Us</h6></a>
            </div>
          </div>
          <div className="footer-menu">
            <h5>Connect</h5>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className='p-large text-gray'>@2024 Netflix, All Rights Reserved</p>
          <div className="footer-links-bottom">
            <a href="#"><h6 className="p-large text-gray">Terms of Use</h6></a>
            <a href="#"><h6 className="p-large text-gray">Privacy Policy</h6></a>
            <a href="#"><h6 className="p-large text-gray">Cookie Policy</h6></a>
          </div>
        </div>
      </div>
    </>
  )
}