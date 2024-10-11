import { useState } from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State for hamburger menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle hamburger menu visibility
  };

  return (
    <>
      <div className={style.navContainer}>
        <div className={`${style.navBox}`}>
          
          {/* Hamburger button for small screens */}
          <div className={style.hamburger} onClick={toggleNav}>
            <i className={`fas fa-bars ${style.hamburgerIcon}`}></i>
          </div>
          
          

          {/* Logo */}
          <div className={`${style.logo}`}>
            <Link to="/">
            <img
              src="https://i.ibb.co/J3FvgWQ/logo.png"
              alt="Logo"
              className={style.logoImage}
              />
            </Link>
          </div>

          {/* Navigation buttons for larger screens */}
          <div className={`${style.navButtons} ${isNavOpen ? style.show : ''}`}>
            <Link to="/"><button className={style.navButton}>Home</button></Link>
            <div className={style.navButton} onClick={toggleDropdown}>
              Other Section
              <i className={`fas fa-caret-down ${style.dropdownArrow}`}></i>
            </div>
            <button className={style.navButton}>Your Orders</button>
          </div>

          {/* Right section with search, cart, profile (larger screens) */}
          <div className={style.rightSection}>
            <div className={style.search}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="Search..."
              />
              <i className={`fas fa-search ${style.searchIcon}`}></i>
            </div>

            <div className={style.cart}>
              <i className="fas fa-shopping-cart"></i>
            </div>

            <div className={style.profile} onClick={toggleProfileDropdown}>
              <i className="fas fa-user"></i>
            </div>

            {isProfileDropdownOpen && (
              <div className={style.profileDropdown}>
                <a href="#">Your Profile</a>
                <a href="#">Track Your Order</a>
                <a href="#">Customer Service</a>
                <a href="#">Sign Out</a>
              </div>
            )}
          </div>
        </div>

        {/* Dropdown content for "Other Section" */}
        {isDropdownOpen && (
          <div className={style.horizontalList}>
            <a href="#">Kurties</a>
            <a href="#">Pant Set</a>
            <a href="#">Short Kurties & Tops</a>
            <a href="#">Pants</a>
            <a href="#">Dupatta & Stole</a>
            <a href="#">Party Wear</a>
            <a href="#">Gown & One Piece</a>
            <a href="#">Night Wear</a>
          </div>
        )}
      </div>

      {/* Hamburger sliding menu for small screens */}
      <div className={`${style.hamburgerMenu} ${isNavOpen ? style.hamburgerActive : ''}`}>
        <button onClick={toggleNav} className={style.closeHamburger}>
          <i className="fas fa-times"></i>
        </button>

        <a href="#">Home</a>
        <a href="#" onClick={toggleDropdown}>
          Other Section <i className={`fas fa-caret-down ${style.dropdownArrow}`}></i>
        </a>

        {isDropdownOpen && (
          <div className={style.dropdownContent}>
            <a href="#">Kurties</a>
            <a href="#">Pant Set</a>
            <a href="#">Short Kurties & Tops</a>
            <a href="#">Pants</a>
            <a href="#">Dupatta & Stole</a>
            <a href="#">Party Wear</a>
            <a href="#">Gown & One Piece</a>
            <a href="#">Night Wear</a>
          </div>
        )}

        <a href="#">Your Orders</a>
        <a href="#">Your Profile</a>
        <a href="#">Track Your Order</a>
        <a href="#">Customer Service</a>
        <a href="#">Sign Out</a>
      </div>

      {/* Main page content */}
      <div className={style.pageContent}>
        {/* Your main page content goes here */}
      </div>
    </>
  );
};

export default Navbar;
