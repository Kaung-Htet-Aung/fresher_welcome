// src/App.jsx
import React from 'react';
import Boy from './Boy';
import Girl from './Girl';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Boy/>} />
          <Route path="/girl" element={<Girl/>} />     
        </Routes>
    </BrowserRouter>
  );
};

export default App;
