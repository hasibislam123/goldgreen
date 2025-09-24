import {  } from 'react'
import Navbar from './componet/navbar/Navbar'
import Banner from './componet/Banner/Banner'
import Herosection from './componet/herosection/herosection'
import Cart from './componet/Cart-componet/cart'


function App() {
  

  return (
    <>
      {/* Navbar */}
        <Navbar></Navbar> 

      {/* Banner    */}
        <Banner></Banner>

      {/* heroSection   */}
      <Herosection></Herosection>

      <Cart></Cart>
      
    </>
  )
}

export default App
