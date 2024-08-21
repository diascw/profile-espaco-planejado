import React from 'react';
import profileImage from '../assets/profileImage.png';
import styles from './profile.module.css';

function Profile() {
  return (
    <div className={styles.profile}>
      <img src={profileImage} alt="logotipo loja Espaço Planejado" className={styles.profileImg} />
      <h2>Espaço Planejado</h2>
      <h3>Belo Horizonte e Região Metropolitana
      </h3>
    </div>
  );
}

export default Profile;
