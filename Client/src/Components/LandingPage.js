// LandingPage.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page-container">
      {/* Left Column - Central Image */}
      <div className="central-image-container">
        <img src='/Venina.png' alt='Italian Food' className="central-image" />
      </div>

      {/* Right Column - Order Your Italian Button */}
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
