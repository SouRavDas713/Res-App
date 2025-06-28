// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Moonstone Restaurant</h1>
      <p style={styles.tagline}>Delicious meals served fresh every day</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    margin: '0',
    fontSize: '2.5rem'
  },
  tagline: {
    marginTop: '10px',
    fontSize: '1.2rem'
  }
};

export default Header;
