import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AllNews from './pages/AllNews';
import FreeRadioEritrea from './pages/FreeRadioEritrea';
import ArticlePage from './pages/ArticlePage';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        {sidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
        
        <Routes>
        <Route path="/articles" element={<AllNews />} />
        <Route path="/FreeRadioEritrea" element={<FreeRadioEritrea />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;