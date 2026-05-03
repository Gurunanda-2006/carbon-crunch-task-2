import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Marketplace from './pages/Marketplace'
import Artists from './pages/Artists'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/artists"     element={<Artists />} />
        <Route path="/contact"     element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
