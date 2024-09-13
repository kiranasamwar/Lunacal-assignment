import React, { useState } from 'react';
import './Navbar.css'; // Import the updated CSS file

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="info-tabs">
      <div className="tab-header">
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >
          Experiences
        </button>
        <button
          className={activeTab === 'recommended' ? 'active' : ''}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'about' && (
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce.
            I’ve been working at this awesome company for 3 years now.
            
          </p>
        )}
        {activeTab === 'experience' && <p>Hello! I’m Dave, your sales rep here from Salesforce.
            I’ve been working at this awesome company for 3 years now.
            I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. </p>}
        {activeTab === 'recommended' && <p>Hello! I’m Dave, your sales rep here from Salesforce.
            I’ve been working at this awesome company for 3 years now.
            I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, 
            so my calender is usually blocked between 9-10 AM. This is a...</p>}
      </div>
    </div>
  );
};

export default Navbar;