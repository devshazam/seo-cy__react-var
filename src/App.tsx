import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Empty from './pages/Empty';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import LayoutHome from './LayoutHome';
import Page from './pages/Page';


const App = () => {

  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayoutHome />}>
              <Route index element={<Home />} /> 
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/1" element={<Page />} />
              <Route path="/*" element={<Empty />} />
          </Route>

      </Routes>
      
    </BrowserRouter>
    
    </div>
  );
};

export default App;
