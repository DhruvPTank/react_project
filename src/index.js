import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SuperCars from './SuperCars';
import  Layout from './Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Addcars from './AddCars';
import CarAdd from './AddCars';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<SuperCars />}></Route>
      <Route path="/supercars" element={<SuperCars />}></Route>
      <Route path="/supercars/:id" element={<SuperCars />}></Route>

      <Route path ="/add_cars" element={<add_cars />}></Route>
      <Route path ="AddCars" element={<CarAdd />}></Route>
       <Route></Route>
     </Route>
   </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
