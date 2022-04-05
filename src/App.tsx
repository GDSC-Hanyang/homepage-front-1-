import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import CardActivities from './components/main/CardActivities';
import CardStudents from './components/main/CardStudents';
import CardSNS from './components/main/CardSNS';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardActivities/>} />
            <Route path="/1" element={<CardActivities/>} />
            <Route path="/2" element={<CardStudents/>} />
            <Route path="/3" element={<CardSNS/>} />
          </Routes>
        </BrowserRouter>
      </div>
      
    
  );
}

export default App;
