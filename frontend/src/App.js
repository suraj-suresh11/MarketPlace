import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Signupform from './components/Signup/Signupform';
import ForgotPassword from './components/ForgotPassword/Forgotpassword';
import ResetSuccess from './components/ResetSuccess/Resetsuccess';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signupform />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-success" element={<ResetSuccess />} />
        </Routes>
      </main>
    </div>
  );
}

// Home page component
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Marketplace! Explore various categories and ads.</p>
    </div>
  );
}

export default App;