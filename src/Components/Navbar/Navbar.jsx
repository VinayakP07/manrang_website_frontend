/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profileRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);  // Toggle dropdown visibility for "Other Section"
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    } else {
      navigate('/login');
    }
  };

  const handleOrderClick = () => {
    if (isLoggedIn) {
      navigate('/orders');
    } else {
      navigate('/login');
    }
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      if (isNavOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false); // Close dropdown when an item is clicked
  };

  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navBox}>

          {/* Hamburger button for small screens */}
          <div className={style.hamburger} onClick={toggleNav}>
            <i className={`fas fa-bars ${style.hamburgerIcon}`}></i>
          </div>

          <div className={style.logo}>
            <Link to="/">
              <img
                src="https://i.ibb.co/J3FvgWQ/logo.png"
                alt="Logo"
                className={style.logoImage}
              />
            </Link>
          </div>

          <div className={`${style.navButtons} ${isNavOpen ? style.show : ''}`}>
            <Link to="/"><button className={style.navButton}>Home</button></Link>
            <div className={style.navButton} onClick={toggleDropdown}>
              Other Section
              <i className={`fas fa-caret-down ${style.dropdownArrow} ${isDropdownOpen ? style.rotate : ''}`}></i>
            </div>
            <button className={style.navButton} onClick={handleOrderClick}>Your Orders</button>
          </div>

          <div className={style.rightSection}>
            <div className={style.search}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="Search..."
              />
              <i className={`fas fa-search ${style.searchIcon}`}></i>
            </div>

            <div className={style.cart} onClick={handleCartClick}>
              <i className="fas fa-shopping-cart"></i>
            </div>

            <div className={style.profile} onClick={handleProfileClick} ref={profileRef}>
              <i className="fas fa-user"></i>
            </div>

            {isLoggedIn && isProfileDropdownOpen && (
              <div className={style.profileDropdown}>
                <a href="">Your Profile</a>
                <a href="">Track Your Order</a>
                <a href="">Customer Service</a>
                <a href="">Sign Out</a>
              </div>
            )}
          </div>
        </div>

        {/* Dropdown for "Other Section" */}
        {isDropdownOpen && (
          <div className={style.horizontalList}>
            <Link to="/kurties"><div onClick={handleDropdownItemClick}>Kurties</div></Link>
            <Link to="/pantSet"><div onClick={handleDropdownItemClick}>Pant Set</div></Link>
            <Link to="/shortKurtiesTops"><div onClick={handleDropdownItemClick}>Short Kurties & Tops</div></Link>
            <Link to="/pants"><div onClick={handleDropdownItemClick}>Pants</div></Link>
            <Link to="/dupattaStole"><div onClick={handleDropdownItemClick}>Dupatta & Stole</div></Link>
            <Link to="/partyWear"><div onClick={handleDropdownItemClick}>Party Wear</div></Link>
            <Link to="/gownOnePiece"><div onClick={handleDropdownItemClick}>Gown & One Piece</div></Link>
            <Link to="/nightWear"><div onClick={handleDropdownItemClick}>Night Wear</div></Link>
          </div>
        )}
      </div>

      <div
        className={`${style.hamburgerMenu} ${isNavOpen ? style.hamburgerActive : ''}`}
        ref={navRef}
      >
        <button onClick={toggleNav} className={style.closeHamburger}>
          <i className="fas fa-times"></i>
        </button>

        <Link className={style.hamBtn} to="/">Home</Link>
        <div className={style.hamBtn} onClick={toggleDropdown}>
          Other Section <i className={`fas fa-caret-down ${style.dropdownArrow} ${isDropdownOpen ? style.rotate : ''}`}></i>
        </div>

        {isDropdownOpen && (
          <div className={style.dropdownContent}>
            <Link to="/kurties"><div onClick={handleDropdownItemClick}>Kurties</div></Link>
            <Link to="/pantSet"><div onClick={handleDropdownItemClick}>Pant Set</div></Link>
            <Link to="/shortKurtiesTops"><div onClick={handleDropdownItemClick}>Short Kurties & Tops</div></Link>
            <Link to="/pants"><div onClick={handleDropdownItemClick}>Pants</div></Link>
            <Link to="/dupattaStole"><div onClick={handleDropdownItemClick}>Dupatta & Stole</div></Link>
            <Link to="/partyWear"><div onClick={handleDropdownItemClick}>Party Wear</div></Link>
            <Link to="/gownOnePiece"><div onClick={handleDropdownItemClick}>Gown & One Piece</div></Link>
            <Link to="/nightWear"><div onClick={handleDropdownItemClick}>Night Wear</div></Link>
          </div>
        )}

        <div onClick={handleOrderClick} className={style.hamBtn}>Your Orders</div>
        <div onClick={handleProfileClick} className={style.hamBtn}>Your Profile</div>
      </div>
    </>
  );
};

export default Navbar;