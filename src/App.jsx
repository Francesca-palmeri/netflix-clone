//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNavbar from "./components/NetflixNavbar"
import SectionHero from "./components/SectionHero"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NetflixFooter from "./components/NetflixFooter"
import HarryPotter from "./components/HarryPotter"

function App() {
  return (
    <>
      <BrowserRouter>
        <NetflixNavbar />

        <Routes>
          <Route path="/" element={<SectionHero />}></Route>
        </Routes>

        <Routes>
          <Route path="/tv-shows" element={<HarryPotter />}></Route>
        </Routes>

        <NetflixFooter />
      </BrowserRouter>
    </>
  )
}

export default App
