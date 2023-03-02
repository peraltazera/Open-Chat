import { useState } from 'react'
import './Aside.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Aside() {
  return (
    <div className="Aside">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Aside
