import React from 'react';
import './StatisticsCards.css';

const StatisticsCards = ({ data }) => {
  const cards = [
    { label: 'Active Campaigns', value: data.totalCampaigns, icon: '📋', color: '#6366f1' },
    { label: 'Total Participants', value: data.activeParticipants.toLocaleString(), icon: '👥', color: '#8b5cf6' },
    { label: 'Resources Available', value: data.resourcesAvailable, icon: '📚', color: '#ec4899' },
    { label: 'Satisfaction Rate', value: `${data.satisfactionRate}%`, icon: '⭐', color: '#f59e0b' }
  ];

  return (
    <div className="statistics-cards">
      {cards.map((card, index) => (
        <div key={index} className="stat-card" style={{ '--card-color': card.color }}>
          <div className="stat-icon">{card.icon}</div>
          <div className="stat-content">
            <h3 className="stat-value">{card.value}</h3>
            <p className="stat-label">{card.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;

