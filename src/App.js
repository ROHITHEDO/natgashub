import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/Side_Navigation/SideNav'; // SideNav Component
import Dashboard from './components/Dashboard/dashboard'; // Create these components accordingly
import Noms from './components/Noms/noms';
import SchedQty from './components/SchedQty/schedQty';
import Firm from './components/gtran/firm/firm';
import Interruptible from './components/gtran/interruptible/interruptible';
import GTranWatchlists from './components/gtran/watchlist/watchlist';

const App = () => {
  return (
      <Router>
          <div className="app">
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
          </div>
      </Router>
  );
};

export default App;
