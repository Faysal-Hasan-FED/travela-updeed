import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import MyNavbar from './pages/Shared/MyNavbar/MyNavbar';
import About from './pages/About/About/About';
import NotFound from './pages/NotFound/NotFound';
import Tour from './pages/Tour/Tour/Tour';
import Hotels from './pages/Hotels/Hotels/Hotels';

function App() {
  return (
    <div>
      <BrowserRouter>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/tour" element={<Tour></Tour>}></Route>
        <Route path="/hotels" element={<Hotels></Hotels>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
