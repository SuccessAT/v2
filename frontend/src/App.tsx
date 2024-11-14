import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScaleStaffLandingPage from './pages/landing-page';
// import Register from './pages/Register';
// import Login from './pages/Login';
import BlogPage from './pages/blog-page';
import './App.css';
import './styles/globals.css';
import AuthPage from './pages/auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScaleStaffLandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
