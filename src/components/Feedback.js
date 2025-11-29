import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
    rating: '',
    anonymous: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        category: '',
        subject: '',
        message: '',
        rating: '',
        anonymous: false
      });
    }, 3000);
  };

  return (
    <div className="feedback-page">
      <div className="feedback-header">
        <div className="container">
          <h1>Share Your Feedback</h1>
          <p>Your input helps us improve our gender-responsive initiatives</p>
        </div>
      </div>

      <div className="container">
        <div className="feedback-container">
          <form onSubmit={handleSubmit} className="feedback-form">
            {submitted && (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <p>Thank you! Your feedback has been submitted successfully.</p>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Name {!formData.anonymous && <span className="required">*</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={formData.anonymous}
                  required={!formData.anonymous}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email {!formData.anonymous && <span className="required">*</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={formData.anonymous}
                  required={!formData.anonymous}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category <span className="required">*</span></label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="campaigns">Campaigns</option>
                  <option value="resources">Resources</option>
                  <option value="website">Website</option>
                  <option value="policy">Policy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rating">Overall Rating</label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="">Select rating</option>
                  <option value="5">Excellent ⭐⭐⭐⭐⭐</option>
                  <option value="4">Very Good ⭐⭐⭐⭐</option>
                  <option value="3">Good ⭐⭐⭐</option>
                  <option value="2">Fair ⭐⭐</option>
                  <option value="1">Poor ⭐</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Brief summary of your feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Share your thoughts, suggestions, or concerns..."
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                />
                <span>Submit feedback anonymously</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Submit Feedback
            </button>
          </form>

          <div className="feedback-info">
            <h3>Why Your Feedback Matters</h3>
            <ul>
              <li>Helps us improve our campaigns and resources</li>
              <li>Enables us to better address community needs</li>
              <li>Guides policy and program development</li>
              <li>Creates a more inclusive and responsive system</li>
            </ul>
            <div className="info-note">
              <strong>Note:</strong> All feedback is reviewed regularly and helps shape our future initiatives.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

