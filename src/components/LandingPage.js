import React from 'react';
import { Link } from 'react-router-dom';
import StatisticsCards from './StatisticsCards';
import GenderDistributionChart from './GenderDistributionChart';
import CampaignProgressChart from './CampaignProgressChart';
import statisticsData from '../data/statistics.json';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Building a Gender-Responsive Future
            </h1>
            <p className="hero-subtitle">
              Empowering communities through gender equality initiatives, 
              responsive policies, and inclusive practices that create lasting change.
            </p>
            <div className="hero-buttons">
              <Link to="/campaigns" className="btn btn-primary">
                Explore Campaigns
              </Link>
              <Link to="/resources" className="btn btn-secondary">
                View Resources
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <span className="hero-icon">🌍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="container">
          <h2 className="section-title">Our Impact at a Glance</h2>
          <StatisticsCards data={statisticsData.overview} />
        </div>
      </section>

      {/* Charts Section */}
      <section className="charts-section">
        <div className="container">
          <div className="charts-grid">
            <div className="chart-card">
              <h3>Gender Distribution</h3>
              <GenderDistributionChart data={statisticsData.genderDistribution} />
            </div>
            <div className="chart-card">
              <h3>Campaign Progress</h3>
              <CampaignProgressChart data={statisticsData.campaignProgress} />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Key Impact Metrics</h2>
          <div className="impact-grid">
            {statisticsData.impactMetrics.map((metric, index) => (
              <div key={index} className="impact-card">
                <div className="impact-icon">{metric.icon}</div>
                <h3>{metric.metric}</h3>
                <p className="impact-value">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Creating Change</h2>
            <p>Be part of the movement towards gender equality. Share your feedback and help us improve.</p>
            <Link to="/feedback" className="btn btn-primary btn-large">
              Share Your Feedback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

