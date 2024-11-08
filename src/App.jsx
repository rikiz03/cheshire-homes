import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
