import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
