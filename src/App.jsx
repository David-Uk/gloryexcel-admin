// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import Listings from './pages/Listings';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Non-layout routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Layout routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
