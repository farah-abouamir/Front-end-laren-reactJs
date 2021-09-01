import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>A propos de nous</h2>
            <Link to='/sign-up'>Label de  LARN</Link>
            <Link to='/'>Comment obtenir le label</Link>
            <Link to='/'>Média</Link>
  
          </div>
          <div class='footer-link-items'>
            <h2>Contacter nous</h2>
            <Link to='/'>Email</Link>
            <Link to='/'>Tel : </Link>
            <Link to='/'>Fax : </Link>
        
          </div>
        </div>
        <div className='footer-link-wrapper'>
  
          <div class='footer-link-items'>
            <h2>Documentation</h2>
            <Link to='/'>Chercher un article</Link>
            <Link to='/'>Articles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
