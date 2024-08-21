import React from 'react';
import Profile from './Profile';
import Buttons from './Buttons';
import Footer from './Footer';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Profile />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
