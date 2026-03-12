import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AI from './pages/AI';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </Router>
  );
}

export default App;