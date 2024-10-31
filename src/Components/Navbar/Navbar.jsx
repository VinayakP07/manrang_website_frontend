/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      setIsProfileDropdownOpen((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  const handleOrderClick = () => {
    if (isLoggedIn) {
      navigate("/orders");
    } else {
      navigate("/login");
    }
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsProfileDropdownOpen(false);
    navigate('/login');
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  const handleProfileDropdownItemClick = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navBox}>
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

          <div className={`${style.navButtons} ${isNavOpen ? style.show : ""}`}>
            <Link to="/">
              <button className={style.navButton}>Home</button>
            </Link>
            <div className={style.navButton} onClick={toggleDropdown}>
              Other Section
              <i
                className={`fas fa-caret-down ${style.dropdownArrow} ${
                  isDropdownOpen ? style.rotate : ""
                }`}
              ></i>
            </div>
            <button className={style.navButton} onClick={handleOrderClick}>
              Your Orders
            </button>
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

            {/* Profile Icon */}
            <div
              className={style.profile}
              onClick={handleProfileClick}
              ref={profileRef}
            >
              <i className="fas fa-user"></i>
            </div>

            {/* Profile Dropdown */}
            {isLoggedIn && isProfileDropdownOpen && (
              <div className={`${style.profileDropdown} ${style.show}`}>
                <button onClick={() => { console.log("Profile Clicked"); handleProfileDropdownItemClick(); }}>
                  Your Profile
                </button>
                <button onClick={() => { console.log("Track Order Clicked"); handleProfileDropdownItemClick(); }}>
                  Track Your Order
                </button>
                <button onClick={() => { console.log("Customer Service Clicked"); handleProfileDropdownItemClick(); }}>
                  Customer Service
                </button>
                <button
                  onClick={() => {
                    console.log("I am in handleSignOut");
                    handleSignOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dropdown for "Other Section" */}
        {isDropdownOpen && (
          <div className={style.horizontalList}>
            <Link to="/kurties">
              <div onClick={handleDropdownItemClick}>Kurties</div>
            </Link>
            <Link to="/pantSet">
              <div onClick={handleDropdownItemClick}>Pant Set</div>
            </Link>
            <Link to="/shortKurtiesTops">
              <div onClick={handleDropdownItemClick}>Short Kurties & Tops</div>
            </Link>
            <Link to="/pants">
              <div onClick={handleDropdownItemClick}>Pants</div>
            </Link>
            <Link to="/dupattaStole">
              <div onClick={handleDropdownItemClick}>Dupatta & Stole</div>
            </Link>
            <Link to="/partyWear">
              <div onClick={handleDropdownItemClick}>Party Wear</div>
            </Link>
            <Link to="/gownOnePiece">
              <div onClick={handleDropdownItemClick}>Gown & One Piece</div>
            </Link>
            <Link to="/nightWear">
              <div onClick={handleDropdownItemClick}>Night Wear</div>
            </Link>
          </div>
        )}
      </div>

      <div
        className={`${style.hamburgerMenu} ${isNavOpen ? style.hamburgerActive : ""}`}
      >
        <button onClick={toggleNav} className={style.closeHamburger}>
          <i className="fas fa-times"></i>
        </button>

        <Link className={style.hamBtn} to="/">
          Home
        </Link>
        <div className={style.hamBtn} onClick={toggleDropdown}>
          Other Section{" "}
          <i
            className={`fas fa-caret-down ${style.dropdownArrow} ${
              isDropdownOpen ? style.rotate : ""
            }`}
          ></i>
        </div>

        {isDropdownOpen && (
          <div className={style.dropdownContent}>
            <Link to="/kurties">
              <div onClick={handleDropdownItemClick}>Kurties</div>
            </Link>
            <Link to="/pantSet">
              <div onClick={handleDropdownItemClick}>Pant Set</div>
            </Link>
            <Link to="/shortKurtiesTops">
              <div onClick={handleDropdownItemClick}>Short Kurties & Tops</div>
            </Link>
            <Link to="/pants">
              <div onClick={handleDropdownItemClick}>Pants</div>
            </Link>
            <Link to="/dupattaStole">
              <div onClick={handleDropdownItemClick}>Dupatta & Stole</div>
            </Link>
            <Link to="/partyWear">
              <div onClick={handleDropdownItemClick}>Party Wear</div>
            </Link>
            <Link to="/gownOnePiece">
              <div onClick={handleDropdownItemClick}>Gown & One Piece</div>
            </Link>
            <Link to="/nightWear">
              <div onClick={handleDropdownItemClick}>Night Wear</div>
            </Link>
          </div>
        )}

        <div onClick={handleOrderClick} className={style.hamBtn}>
          Your Orders
        </div>
        <div onClick={handleProfileClick} className={style.hamBtn}>
          Your Profile
        </div>
      </div>
    </>
  );
};

export default Navbar;
