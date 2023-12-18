// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import '../App.css';

function LandingPage() {
  return (
    <div className='landing-page'>
      <div className="logo">
        <img src='/Venina.png' alt="Venina Logo" />
      </div>
      <div className="order-button-container">
        <Link to='/sign_in_up'>
          <Button className="order-button" variant='primary'>
            Order Your Italian
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
