import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage'
import Signin from './pages/Signin';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      
    </Routes>
  );
}

export default App;
