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
import BlogMain from './pages/Blog/BlogMain/BlogMain';
import HotelMain from './pages/Hotels/HotelMain/HotelMain';
import Contact from './pages/Contact/Contact/Contact';

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
        <Route path="/hotels" element={<HotelMain></HotelMain>}></Route>
        <Route path="/blogs" element={<BlogMain></BlogMain>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
