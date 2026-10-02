import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import Header from './components/Header'
import About from './About.tsx'
import Footer from './components/Footer'
import Curriculum from './Curriculum.tsx'
import Contact from './Contact.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <Routes>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
