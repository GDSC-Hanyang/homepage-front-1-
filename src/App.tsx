import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import CardActivities from './components/main/CardActivities';
import CardStudents from './components/main/CardStudents';
import CardSNS from './components/main/CardSNS';
import MainPage from 'pages/MainPage';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    
  );
}

export default App;
