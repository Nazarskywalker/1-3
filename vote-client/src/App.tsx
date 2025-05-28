import { useEffect, useState } from 'react';
import { api } from './api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<QuestionPage />} />
          <Route path="/results/:questionId" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;