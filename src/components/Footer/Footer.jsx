import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                   <img src={assets.logo_foot} alt="" className='logo'/>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint, distinctio iusto eaque quod eius sapiente necessitatibus repellat asperiores officia hic id, nam nulla.</p>
                   <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                   </div>
              </div>

              <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Provicy Policy</li>
                    </ul>
              </div>

              <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+994-55-205-95-86</li>
                        <li>@aqayev2205@gmail.com</li>
                    </ul>
              </div>
          </div>
          <hr />
          <p className="footer-copyright">
            Copyright 2024 @Fooding.com - All Right Reserved.
          </p>
      </div>
  )
}

export default Footer
