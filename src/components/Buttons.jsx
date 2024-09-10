import React from 'react';
import styles from './buttons.module.css';

function Buttons() {

  const links = [
    { text: 'WhatsApp', url: 'https://wa.me/5531992891787?text=Ol%C3%A1!%20Encontrei%20o%20n%C3%BAmero%20da%20empresa%20no%20instagram%20e%20tenho%20interesse%20em%20saber%20mais!' },
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
