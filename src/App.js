
import React from 'react'
import NavScrollExample from './components/Navbar'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Bestsellers from './components/Bestsellers'
import Customers from './components/Customers'
import Paragraph from './components/Paragraph'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
< NavScrollExample/>
<Banner/>
  <Categories/>
  <Bestsellers/>
  <Customers/>
 <Paragraph/>
 <Footer/>
    </div>
  )
}

export default App