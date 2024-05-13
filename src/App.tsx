import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Empty from './pages/Empty';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import LayoutHome from './LayoutHome';
import Sites from './pages/Sites';
import Seo from './pages/Seo';
import Reklama from './pages/Reklama';
import Support from './pages/Support';


const App = () => {

  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayoutHome />}>
              <Route index element={<Home />} /> 
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/razrabotka-saitov" element={<Sites />} />
               <Route path="/razrabotka-saitov/:cat" element={<Sites />} />
               <Route path="/poiskovoe-prodvizenie" element={<Seo />} />
               <Route path="/poiskovoe-prodvizenie/:cat" element={<Seo />} />
               <Route path="/digital-reklama" element={<Reklama />} />
               <Route path="/digital-reklama/:cat" element={<Reklama />} />
               <Route path="/podderzka" element={<Support />} />
               <Route path="/podderzka/:cat" element={<Support />} />
              <Route path="/*" element={<Empty />} />
          </Route>

      </Routes>
      
    </BrowserRouter>
    
    </div>
  );
};

export default App;
