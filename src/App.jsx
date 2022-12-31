import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Notepad from './pages/Notepad'
import Preview from './pages/Preview';
import { CardContext } from './CardContext';
import ComingSoon from './pages/ComingSoon';

function App() {
  const [cardData, setCardData] = useState([]);
  return (
    <CardContext.Provider value={{cardData, setCardData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notepad/>} />
          <Route path="/preview" element={<Preview/>} />
          <Route path="/coming-soon" element={<ComingSoon/>} />
        </Routes>
      </BrowserRouter>
    </CardContext.Provider>
  )
}

export default App
