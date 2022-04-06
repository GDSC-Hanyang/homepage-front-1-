import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import CardActivities from './components/main/CardActivities';
import CardStudents from './components/main/CardStudents';
import CardSNS from './components/main/CardSNS';
import Data from './pages/data';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Data />} />
            <Route path="/2" element={<CardStudents/>} />
            <Route path="/3" element={<CardSNS/>} />
          </Routes>
        </BrowserRouter>
      </div>
      
    
  );
}

export default App;
