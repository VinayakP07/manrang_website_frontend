import React from 'react';
import styles from './AddressCards.module.css';

function AddressCards({ address, isSelected, handleSelectClick, handleEditClick }) {
  
  const addresses = {
    name: 'Demo name',
    Building: 'Demo house/building name, number',
    Area: 'Demo area or locality',
    city_state: 'Demo city, state',
    pincode: 'pincode',
    country: 'Demo country name',
    phone: 'Demo phone number',
  };

  return (
    <div 
      className={`${styles.card} ${isSelected ? styles.selected : ''}`} 
      onClick={handleSelectClick} // Handle card selection
    >
      <div className={styles.addressDetails}>
        <strong>{address.name}</strong>
        <p>{address.Building}</p>
        <p>{address.Area}</p>
        <p>{address.city_state}</p>
        <p>{address.pincode}</p>
        <p>{address.country}</p>
        <p>Phone number: {address.phone}</p>
      </div>
      <div className={styles.actions}>
        <a href="#" className={styles.actionLink} onClick={(e) => {e.stopPropagation(); handleEditClick();}}>
          Edit
        </a>
        <span className={styles.separator}>|</span>
        <a href="#" className={styles.actionLink}>Remove</a>
      </div>
    </div>
  );
}

export default AddressCards;
