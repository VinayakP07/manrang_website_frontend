import { useState, React } from 'react';
import styles from './Address.module.css';
import AddressCards from '../../Components/AddressCards/AddressCards';
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';

function Address() {
  const [addresses, setAddresses] = useState([
    {
      name: 'Demo name',
      Building: 'Demo house/building name, number',
      Area: 'Demo area or locality',
      city_state: 'Demo city, state',
      pincode: 'pincode',
      country: 'Demo country name',
      phone: 'Demo phone number',
    },
    {
      name: 'Demo name',
      Building: 'Demo house/building name, number',
      Area: 'Demo area or locality',
      city_state: 'Demo city, state',
      pincode: 'pincode',
      country: 'Demo country name',
      phone: 'Demo phone number',
    },
    {
      name: 'Demo name',
      Building: 'Demo house/building name, number',
      Area: 'Demo area or locality',
      city_state: 'Demo city, state',
      pincode: 'pincode',
      country: 'Demo country name',
      phone: 'Demo phone number',
    },
  ]);

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    name: '',
    Building: '',
    Area: '',
    city_state: '',
    pincode: '',
    country: '',
    phone: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddAddressClick = () => {
    setCurrentAddress({
      name: '',
      Building: '',
      Area: '',
      city_state: '',
      pincode: '',
      country: '',
      phone: '',
    });
    setEditIndex(null);
    setShowModal(true);
  };

  const handleEditClick = (index) => {
    setCurrentAddress(addresses[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress({
      ...currentAddress,
      [name]: value,
    });
  };

  const handleSaveAddress = () => {
    if (editIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editIndex] = currentAddress;
      setAddresses(updatedAddresses);
    } else {
      setAddresses([...addresses, currentAddress]);
    }
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectClick = (index) => {
    setSelectedAddressIndex(index);
  };

  return (
    <>
      <Navbar />
      <h2 className={styles.heading}>Your Addresses</h2>
      <div className={styles.addressContainer}>
        {/* Add Address Button */}
        <div className={styles.addAddress} onClick={handleAddAddressClick}>
          <p>+<br />Add address</p>
        </div>

        {/* Render Address Cards */}
        {addresses.map((address, index) => (
          <AddressCards
            key={index}
            address={address}
            isSelected={selectedAddressIndex === index}
            handleSelectClick={() => handleSelectClick(index)}
            handleEditClick={() => handleEditClick(index)}
          />
        ))}
      </div>

      {/* Modal Popup for Adding or Editing Address */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{editIndex !== null ? 'Edit Address' : 'Add New Address'}</h2>
            <form className={styles.addressForm}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={currentAddress.name}
                onChange={handleInputChange}
                required
              />

              <label>Building:</label>
              <input
                type="text"
                name="Building"
                value={currentAddress.Building}
                onChange={handleInputChange}
                required
              />

              <label>Area:</label>
              <input
                type="text"
                name="Area"
                value={currentAddress.Area}
                onChange={handleInputChange}
                required
              />

              <label>City, State:</label>
              <input
                type="text"
                name="city_state"
                value={currentAddress.city_state}
                onChange={handleInputChange}
                required
              />

              <label>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={currentAddress.pincode}
                onChange={handleInputChange}
                required
              />

              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={currentAddress.country}
                onChange={handleInputChange}
                required
              />

              <label>Phone number:</label>
              <input
                type="tel"
                name="phone"
                value={currentAddress.phone}
                onChange={handleInputChange}
                required
              />

              <div className={styles.modalActions}>
                <button type="button" onClick={handleCloseModal}>Cancel</button>
                <button type="button" onClick={handleSaveAddress}>Save Address</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <BottomBanner />
      <Footer />
    </>
  );
}

export default Address;
