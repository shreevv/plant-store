import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Welcome to PlantParadise</h1>
          <p>
            Your one-stop shop for the finest houseplants to brighten your space.
            From lush ferns to hardy succulents, we have the perfect green companion
            waiting for you.
          </p>
          <Link to="/products">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;