import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../assets/social/communication.png';
import Twitter from '../assets/social/twitter.png';
import Youtube from '../assets/social/youtube.png';
import Instagram from '../assets/social/instagram.png';
import { MdPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import Watshapp from '../assets/social/whatsapp.png';



const Footer = () => {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer-flex'>
          <div className='footer-container-1'>
            <h2 className='heading  footer-heading'>Why Us</h2>
            <div className='some-content'>
              <a href="#" className="brand" style={{ filter: 'none' }}>Ulinkit</a>
              <p className=' para1'>At Gulf Ulinkit, creativity isn’t just a part of our process; it’s at the core of who we are. We are a creative agency where imagination meets innovation. If you can think it, we can make it happen.</p>
            </div>
          </div>
          <div className='footer-container-2'>
            <h2 className='heading  footer-heading'>Our Services</h2>
            <div className='some-content'>
              <div className='footer-services'>Web Developement</div>
              <div className='footer-services'>Desigining</div>
              <div className='footer-services'>Mobile Developement</div>
              <div className='footer-services'> SEO</div>
              <div className='footer-services'>Branding</div>
              <div className='footer-services'>Digital Marketing</div>
              <div className='footer-services'>AWS Services</div>
            </div>
          </div>
          <div className='footer-container-2'>
            <h2 className='heading  footer-heading'>Our Menu</h2>
            <div className='some-content'>
              <Link to='/' className='footer-services'>Home</Link>
              <Link to='/about-us' className='footer-services'>About</Link>
              <Link to='/services' className='footer-services'>Services</Link>
              <Link to='/portfolio' className='footer-services'>Portfolio</Link>
              <Link to='/blogs' className='footer-services'>Blog</Link>
              <Link to='/contact-us' className='footer-services'>Contact Us</Link>
            </div>
          </div>
          <div className='footer-container-2'>
            <h2 className='heading  footer-heading'>Contact Info</h2>
            <div className='footer-content-flex'>
              <div className='some-content'>
                <p className='para3'>India-</p>
                <div className='footer-contact'>
                  <MdPhone className='icons-contact' />
                  <p className='para2'>Phone:</p>
                  <p>+918750518844 </p>
                </div>
                <div className='footer-contact'>
                  <GrLocation className='icons-contact' />
                  <p className='para2'>Address:</p>
                  <p>Uttam Nagar New Delhi</p>
                </div>
                <div className='footer-contact'>
                  <MdEmail className='icons-contact' />
                  <p className='para2'>Email: <span className='lovercase'>dhiraj@ulinkitus.com</span></p>
                </div>
                {/*  dubai address */}
              </div>
              <div className='some-content'>
                <p className='para3'>Dubai-</p>
                <div className='footer-contact'>
                  <MdPhone className='icons-contact' />
                  <p className='para2'>Phone: <span>+966 570690925</span></p>
                </div>
                <div className='footer-contact'>
                  <img src={Watshapp} className='icons-contact  whatsapp-icon' />
                  <p className='para2'>Phone: <span>+971 558408932</span></p>
                </div>
                <div className='footer-contact'>
                  <GrLocation className='icons-contact' />
                  <p className='para2'>Address: <span>201, Clock plaza, <br />Near Rigga metro station Dubai UAE</span></p>
                </div>
                <div className='footer-contact'>
                  <MdEmail className='icons-contact' />
                  <p className='para2'>Email: <span className='lovercase'>info@gmail.com</span></p>
                </div>
                {/*  dubai address */}
              </div>
              <div className='some-content'>
                <p className='para3'>Saudi</p>
                <div className='footer-contact'>
                  <MdPhone className='icons-contact' />
                  <p className='para2'>Phone: <span>+96 6570690925</span></p>
                </div>
                <div className='footer-contact'>
                  <GrLocation className='icons-contact' />
                  <p className='para2'>Address: <span>B.No 8158 <br />Imam Al shafi Road Ar rayan Riyadh</span></p>
                </div>
                <div className='footer-contact'>
                  <MdEmail className='icons-contact' />
                  <p className='para2'>Email: <span className='lovercase'>info@gmail.com</span></p>
                </div>
                {/*  dubai address */}
              </div>
            </div>
            <div className='footer-contact'>
              <img className='footer-social-icon' src={Facebook} />
              <img className='footer-social-icon' src={Instagram} />
              <img className='footer-social-icon' src={Twitter} />
              <img className='footer-social-icon' src={Youtube} />
            </div>
          </div>
        </div>
        {/*  another content */}
        <div className='footer-container-3'>
          <h2 className='heading  footer-services copyright'>Copyright 2024 | Ulinkit , All Right Reserved.</h2>
        </div>
      </div>
    </Fragment>
  )
};

export default Footer;