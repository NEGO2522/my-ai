import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AI from './pages/AI';
import { ShaderAnimation } from './components/shader-animation';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>

        {/* This sets ShaderAnimation as the default home page */}
        <Route path="/" element={<ShaderAnimation />} />

        {/* Other routes */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </Router>
  );
}

export default App;