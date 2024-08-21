import React from 'react';
import styles from './buttons.module.css';

function Buttons() {

  const links = [
    { text: 'WhatsApp', url: 'https://w.app/wVEprc' },
    { text: 'Instagram', url: 'https://www.instagram.com/espacoplanejado.oficial/' },
    { text: 'E-mail', url: 'mailto:espacoplanejadomovelaria2009@gmail.com' }
  ];

  return (
    <ul className={styles.buttons}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target={link.text === 'E-mail' ? '_blank' : '_self'} rel="noopener noreferrer">{link.text}</a>
        </li>
      ))}
    </ul>
  );
}

export default Buttons;
