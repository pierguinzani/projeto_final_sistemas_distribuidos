import React from 'react';
import {FiInstagram} from 'react-icons/fi'

import './styles.css';

function Footer() {
  return (
    <div className="container">
      <div className="mediaContainer">
      <div>
        <a href="https://www.instagram.com/artesanalayres/" draggable={false}>
        <button href="https://www.instagram.com/artesanalayres/">  
            <FiInstagram color="#FFF" size="50%"/>
        </button>
        </a>
      </div>
    </div>
  </div>
  );
}

export default Footer;