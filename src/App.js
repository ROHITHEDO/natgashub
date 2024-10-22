import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/Side_Navigation/SideNav';
import Footer from './components/Footer/Footer'; // Your Footer component
import Dashboard from './components/Dashboard/dashboard';
import Noms from './components/Noms/noms';
import SchedQty from './components/SchedQty/schedQty';
import Firm from './components/gtran/firm/firm';
import Interruptible from './components/gtran/interruptible/interruptible';
import GTranWatchlists from './components/gtran/watchlist/watchlist';
import Login from './components/Login/Login'; // Your login component
import "./App.css"

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Accessing authentication state

  return (
    <Router>
      <div className="app-container">
        {!isAuthenticated ? (
          // Show login page when user is not authenticated
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        ) : (
          <>
            {/* SideNav and Footer outside of Routes to always be displayed */}
            <SideNav />
            <div className="main-content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/noms" element={<Noms />} />
                <Route path="/sched-qty" element={<SchedQty />} />
                <Route path="/firm" element={<Firm />} />
                <Route path="/interruptible" element={<Interruptible />} />
                <Route path="/gtran-watchlists" element={<GTranWatchlists />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
