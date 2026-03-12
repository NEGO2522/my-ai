import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AI from './pages/AI';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AI />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </Router>
  );
}

export default App;