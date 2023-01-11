import React from 'react'
import DefySection from '../../Components/DefySection/DefySection'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import "./style.css"
import "../../Assets/css/responsive.css"
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReduxData from '../../Components/ReduxData/ReduxData'

const Home = () => {
  const scrollTo =(name) =>{
      
    scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        
      });
    }
  return (
    <main>
      <Topbar scrollTo={scrollTo}/>
      <Navbar scrollTo={scrollTo}/>
      

      <DefySection/>
      <Footer/>




    </main>

  )
}

export default Home