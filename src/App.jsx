//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNavbar from "./components/NetflixNavbar"
import SectionHero from "./components/SectionHero"
import NetflixFooter from "./components/NetflixFooter"

function App() {
  return (
    <>
      <NetflixNavbar />
      <SectionHero />

      <NetflixFooter />
    </>
  )
}

export default App
