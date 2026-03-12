import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AI from './pages/AI';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        {/* This sets Landing as the default home page */}
        <Route path="/" element={<Landing />} />
        
        {/* Other routes */}
        <Route path="/ai" element={<AI />} />
      </Routes>
    </Router>
  );
}

export default App;