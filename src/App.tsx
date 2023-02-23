import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
