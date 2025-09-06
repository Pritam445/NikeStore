import React from 'react'
import { Hero } from './Components'

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'
import Sales from './Components/Sales'
import FlexContent from './Components/FlexContent'
import Stories from './Components/Stories'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
        <main className='flex flex-col gap-16 relative'>
          <Cart />
          <Nav />
          <Hero heroapi={heroapi} />
          <Sales endpoint={popularsales} ifExists />
          <FlexContent endpoint={highlight}  ifExists />
          <Sales endpoint={toprateslaes} />
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
          <Footer footerAPI={footerAPI} />
        </main>
    </>
  )
}

export default App