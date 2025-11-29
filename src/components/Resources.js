import React, { useState } from 'react';
import resourcesData from '../data/resources.json';
import './Resources.css';

const Resources = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const types = ['All', ...new Set(resourcesData.map(resource => resource.type))];

  const filteredResources = resourcesData.filter(resource => {
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="resources-page">
      <div className="resources-header">
        <div className="container">
          <h1>Resources Library</h1>
          <p>Access tools, guides, and materials to support gender-responsive initiatives</p>
        </div>
      </div>

      <div className="container">
        <div className="resources-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          <div className="type-filters">
            {types.map(type => (
              <button
                key={type}
                className={`type-filter ${selectedType === type ? 'active' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-header">
                <span className={`resource-type ${resource.type.toLowerCase().replace(' ', '-')}`}>
                  {resource.type}
                </span>
                <span className="resource-category">{resource.category}</span>
              </div>
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-footer">
                  <div className="resource-downloads">
                    <span className="download-icon">⬇️</span>
                    <span>{resource.downloads.toLocaleString()} downloads</span>
                  </div>
                  <button className="btn btn-primary btn-small">
                    Access Resource
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-results">
            <p>No resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;

