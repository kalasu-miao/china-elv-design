import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';
import Standards from './pages/Standards';
import ReviewVision from './pages/ReviewVision';
import BIM from './pages/BIM';

// Placeholder components for routes not fully implemented in this demo
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center min-h-[60vh] bg-slate-50">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-slate-400 mb-2">{title}</h2>
      <p className="text-slate-500">Content coming soon to the Architect's platform.</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/review" element={<ReviewVision />} />
            <Route path="/bim" element={<BIM />} />
            <Route path="/trends" element={<PlaceholderPage title="Digital Trends & AI" />} />
            <Route path="/talks" element={<PlaceholderPage title="Industry Talks" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;