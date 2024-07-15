import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/HomePage';
import VirtualCloset from './components/VirtualCloset';

const trends = [
  {
    id: 1,
    image: '/path/to/image1.jpg',
    title: 'Preppy Leisure',
    description: 'Inspired by the court, preppy leisure is about that extra dose of polish.',
  },
  // Add more trends here
];

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/virtual-closet" element={<VirtualCloset />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
