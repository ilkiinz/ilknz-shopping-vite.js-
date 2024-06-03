import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import Women from "./Women/Women"
import Men from "./Men/Men"
import Shop from "./Shop All/Shop"
import About from "./About/About"
function App() {
 

  return (
    <>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />

       
      </Routes>
    </>
  )
}

export default App
