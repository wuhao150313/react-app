import React from 'react';
import '../styles/BusinessCard.css';

const BusinessCard = () => {
  return (
    <div className="business-card">
      <div className="card-header">
        <img 
          src="https://via.placeholder.com/100" 
          alt="头像" 
          className="avatar"
        />
        <h1>您的姓名</h1>
        <p className="title">职位头衔</p>
      </div>
      
      <div className="card-content">
        <div className="contact-info">
          <p>📧 your.email@example.com</p>
          <p>📱 +86 123 4567 8900</p>
          <p>📍 城市，国家</p>
        </div>
        
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;