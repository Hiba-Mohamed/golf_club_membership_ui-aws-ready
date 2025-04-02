import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import TournamentsPage from "./pages/TournamentsPage";
import MembersPage from './pages/MembersPage';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div
        style={{
          backgroundImage: "url(/golfBg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route
              path="/contact"
              element={<h2>Contact Page (Coming Soon)</h2>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
