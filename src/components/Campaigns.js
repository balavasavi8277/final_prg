import React, { useState } from 'react';
import campaignsData from '../data/campaigns.json';
import './Campaigns.css';

const Campaigns = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(campaignsData.map(campaign => campaign.category))];

  const filteredCampaigns = selectedCategory === 'All'
    ? campaignsData
    : campaignsData.filter(campaign => campaign.category === selectedCategory);

  return (
    <div className="campaigns-page">
      <div className="campaigns-header">
        <div className="container">
          <h1>Our Campaigns</h1>
          <p>Discover active campaigns working towards gender equality</p>
        </div>
      </div>

      <div className="container">
        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="campaigns-grid">
          {filteredCampaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-image">
                <div className="campaign-image-placeholder">
                  <span>{campaign.category.charAt(0)}</span>
                </div>
                <span className={`campaign-status ${campaign.status.toLowerCase()}`}>
                  {campaign.status}
                </span>
              </div>
              <div className="campaign-content">
                <span className="campaign-category">{campaign.category}</span>
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                <div className="campaign-meta">
                  <div className="meta-item">
                    <span className="meta-label">Participants:</span>
                    <span className="meta-value">{campaign.participants.toLocaleString()}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Started:</span>
                    <span className="meta-value">{new Date(campaign.startDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

