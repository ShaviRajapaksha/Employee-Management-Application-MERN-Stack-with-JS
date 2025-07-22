import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";


// User app pages

import LandingPage from './pages/LandingPage';


// axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      window.location.reload();
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes as needed */}
        </Routes> 
      </Router>
  );
}

export default App;