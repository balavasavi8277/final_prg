import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Campaigns from './components/Campaigns';
import Resources from './components/Resources';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

