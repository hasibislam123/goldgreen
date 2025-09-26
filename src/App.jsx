import {  } from 'react'
import Navbar from './componet/navbar/Navbar'
import Banner from './componet/Banner/Banner'
import Herosection from './componet/herosection/herosection'
import Cart from './componet/PostBox/PostBox'
import PostBox from './componet/PostBox/PostBox'


function App() {
  

  return (
    <>
      {/* Navbar */}
        <Navbar></Navbar> 

      {/* Banner    */}
        <Banner></Banner>

      {/* heroSection   */}
      <Herosection></Herosection>

      <PostBox></PostBox>
      
    </>
  )
}

export default App
