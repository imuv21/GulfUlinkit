import React, { useEffect, Fragment } from 'react';
import EastIcon from '@mui/icons-material/East';
import './Header.scss';

const Header = () => {

  useEffect(() => {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const headerMenu = document.getElementById("header");

    const handleBurgerClick = () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
    };

    const handleLinkClick = () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
    };

    const handleScroll = () => {
      if (window.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
      } else {
        headerMenu.classList.remove("on-scroll");
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && navbarMenu.classList.contains("is-active")) {
        navbarMenu.classList.remove("is-active");
      }
    };

    burgerMenu.addEventListener("click", handleBurgerClick);

    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      burgerMenu.removeEventListener("click", handleBurgerClick);
      document.querySelectorAll(".menu-link").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <header className="header" id="header">
        <nav className="navbar container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '15px'}}>
            <div className="burger" id="burger">
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
            <a href="#" className="brand">Ulinkit<span style={{ color: 'green' }}></span></a>
          </div>

          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
              <li className="menu-item"><a href="/products" className="menu-link">About us</a></li>
              <li className="menu-item"><a href="#" className="menu-link">Contact us</a></li>
              <li className="menu-item"><a href="#" className="menu-link">Blog</a></li>
              <li className="menu-item"><a href="/search" className="menu-link">Services</a></li>
            </ul>
          </div>
          <a href="/login" className="menu-block">Register Now &nbsp;&nbsp; <EastIcon /></a>
        </nav>
      </header>
    </Fragment>
  )
};

export default Header;