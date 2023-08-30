import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/admin/" element={<LayoutAdmin />}>
              <Route index element={<AllOrdersAdmin />} /> 
              <Route path="/admin/bar" element={<PrivateCab  />} />
              <Route path="/admin/create" element={<CreateGoods  />} />
              <Route path="/admin/user-basket" element={<UserBasket  />} />
          </Route>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              
              <Route path="/vizitki" element={<Vizitki />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/payinfo" element={<Payinfo />} />

              <Route path="/samokleyka" element={<Samokleyka />} />
              <Route path="/goods/:category" element={<AllGoods />} />
              <Route path="/goods/one/:id" element={<OneGoods />} />
              <Route path="/goods/one-update/:id" element={<UpdateGoods />} />

              <Route path="/oferta" element={<Oferta />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<Empty />} />
            </Route>
      </Routes>
      
    </BrowserRouter>
    
    </div>
  );
};

export default App;
