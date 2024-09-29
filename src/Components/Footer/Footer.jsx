// /* eslint-disable no-unused-vars */
// import React from 'react'
// import styles from './Footer.module.css'

// function Footer() {
//   return (
//     <>
//     <footer>


//       <div className={`${styles.footer_section}`}>
//         <h3>About Manrang</h3>
//         <p>
//           From a small room in Bellary to a global ethnic sensation in 13 years.
//           CEO Roshni Tulsian's vision has made Manrang a women-run enterprise,
//           serving clients worldwide with exquisite designs. Empowering women
//           through a unique franchise model.
//         </p>
//         <div className={`${styles.social_icons}`}>
//           <a href="#"><i className={`fab fa-facebook`}></i></a>
//           <a href="#"><i className={`fab fa-instagram`}></i></a>
//           <a href="#"><i className={`fab fa-youtube`}></i></a>
//         </div>
//       </div>

//       <div className={`${styles.footer_section}`}>
//         <h3>Collections by Manrang</h3>
//         <p><a href="#">Designer Saree</a></p>
//         <p><a href="#">Casual Wear</a></p>
//         <p><a href="#">Party Wear</a></p>
//         <p><a href="#">Plus Size</a></p>
//         <p><a href="#">Accessories</a></p>
//         <p><a href="#">Unstitched Material</a></p>
//       </div>

//       <div className={`${styles.footer_section}`}>
//         <h3>Customer Info</h3>
//         <p><a href="#">Track Your Order</a></p>
//         <p><a href="#">Partner Program</a></p>
//         <p><a href="#">Help & Support</a></p>
//         <p><a href="#">FAQ's</a></p>
//         <p><a href="#">Shipping & Delivery Policy</a></p>
//         <p><a href="#">Refund Policy</a></p>
//         <p><a href="#">Privacy Policy</a></p>
//         <p><a href="#">Terms & Conditions</a></p>
//       </div>

//       <div className={`${styles.footer_section}`}>
//         <h3>Facing Issues?</h3>
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <textarea placeholder="Describe your issue..." rows="4" required></textarea>
//         <button type="submit">Submit</button>
//       </div>

//       <div className={`${styles.footer_section}`}>
//         <i className="fab fa-whatsapp"></i>
//       </div>

//       </footer>
//     </>
//   )
// }

// export default Footer




import React, { useState } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Issue submitted successfully!');
  };

  return (
    <>
      <footer>
        {/* About Manrang */}
        <div className={`${styles.footer_section}`}>
          <h3>About Manrang</h3>
          <p>
            From a small room in Bellary to a global ethnic sensation in 13 years. CEO Roshni Tulsian's vision has made Manrang a women-run enterprise, serving clients worldwide with exquisite designs. Empowering women through a unique franchise model.
          </p>
          <div className={`${styles.social_icons}`}>
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Collections by Manrang */}
        <div className={`${styles.footer_section}`}>
          <h3>Collections by Manrang</h3>
          <p><a href="#">Designer Saree</a></p>
          <p><a href="#">Casual Wear</a></p>
          <p><a href="#">Party Wear</a></p>
          <p><a href="#">Plus Size</a></p>
          <p><a href="#">Accessories</a></p>
          <p><a href="#">Unstitched Material</a></p>
        </div>

        {/* Customer Info */}
        <div className={`${styles.footer_section}`}>
          <h3>Customer Info</h3>
          <p><a href="#">Track Your Order</a></p>
          <p><a href="#">Partner Program</a></p>
          <p><a href="#">Help & Support</a></p>
          <p><a href="#">FAQ's</a></p>
          <p><a href="#">Shipping & Delivery Policy</a></p>
          <p><a href="#">Refund Policy</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms & Conditions</a></p>
        </div>

        {/* Facing Issues */}
        <div className={`${styles.footer_section} ${styles.complaint_form}`}>
          <h3>Facing Issues?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="issue"
              placeholder="Describe your issue..."
              rows="4"
              value={formData.issue}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default Footer;
