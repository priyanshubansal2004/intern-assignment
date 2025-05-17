import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
