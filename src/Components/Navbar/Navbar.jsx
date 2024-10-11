import { useState, useEffect, useRef } from 'react';
import style from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State for hamburger menu
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for token presence
  const profileRef = useRef(null); // Ref for the profile dropdown
  const navRef = useRef(null); // Ref for the hamburger menu
  const navigate = useNavigate(); // To programmatically navigate

  // Check if token is present in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set logged-in state based on token presence
  }, []);

  // Handle dropdown toggle for "Other Section"
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle profile click based on login state
  const handleProfileClick = () => {
    if (isLoggedIn) {
      setIsProfileDropdownOpen(!isProfileDropdownOpen); // Toggle dropdown if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  // Handle "Your Orders" click
  const handleOrderClick = () => {
    if (isLoggedIn) {
      navigate('/orders'); // Redirect to "Your Orders" if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  // Handle "Cart" click
  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate('/cart'); // Redirect to cart page if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  // Toggle hamburger menu visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false); // Close the dropdown if clicked outside
      }

      if (isNavOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false); // Close the nav if clicked outside
      }
    };

    // Add event listener for clicks on the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

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
            <button className={style.navButton} onClick={handleOrderClick}>Your Orders</button>
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

            {/* Cart icon */}
            <div className={style.cart} onClick={handleCartClick}>
              <i className="fas fa-shopping-cart"></i>
            </div>

            {/* Profile icon */}
            <div className={style.profile} onClick={handleProfileClick} ref={profileRef}>
              <i className="fas fa-user"></i>
            </div>

            {/* Profile dropdown only if logged in */}
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

        {/* Dropdown content for "Other Section" */}
        {isDropdownOpen && (
          <div className={style.horizontalList}>
            <div>Kurties</div>
            <div>Pant Set</div>
            <div>Short Kurties & Tops</div>
            <div>Pants</div>
            <div>Dupatta & Stole</div>
            <div>Party Wear</div>
            <div>Gown & One Piece</div>
            <div>Night Wear</div>
          </div>
        )}
      </div>

      {/* Hamburger sliding menu for small screens */}
      <div
        className={`${style.hamburgerMenu} ${isNavOpen ? style.hamburgerActive : ''}`}
        ref={navRef}
      >
        <button onClick={toggleNav} className={style.closeHamburger}>
          <i className="fas fa-times"></i>
        </button>

        {/* Show only essential links */}
        <Link className={style.hamBtn} to="/">Home</Link>
        <div className={style.hamBtn} onClick={toggleDropdown}>
          Other Section <i className={`fas fa-caret-down ${style.dropdownArrow}`}></i>
        </div>

        {isDropdownOpen && (
          <div className={style.dropdownContent}>
            <div>Kurties</div>
            <div>Pant Set</div>
            <div>Short Kurties & Tops</div>
            <div>Pants</div>
            <div>Dupatta & Stole</div>
            <div>Party Wear</div>
            <div>Gown & One Piece</div>
            <div>Night Wear</div>
          </div>
        )}

        {/* Conditional rendering based on login state */}
        <div onClick={handleOrderClick} className={style.hamBtn}>Your Orders</div>
        <div onClick={handleProfileClick} className={style.hamBtn}>Your Profile</div>
      </div>

      {/* Main page content */}
      <div className={style.pageContent}>
        {/* Your main page content goes here */}
      </div>
    </>
  );
};

export default Navbar;
