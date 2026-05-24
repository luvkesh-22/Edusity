import React, { useState } from 'react'

import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero.jsx'
import Program from './component/program/Program.jsx'
import Title from './component/Title/Title.jsx'
import About from './component/About/About.jsx'
import Campus from './component/Campus/Campus.jsx'
import Testimonials from './component/Testimonials/Testimonials.jsx'
import Contact from './component/Contact/Contact.jsx'
import Footer from './component/Footer/Footer.jsx'
import VideoPlayer from './component/VideoPlayer/VideoPlayer.jsx'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <>
  

      <div>
        <Navbar />
        <Hero />

        <div className="container">

          <Title subTitle='Our Program' title='What We Offer'/>
          <Program />

          <About setPlayState={setPlayState}/>

          <Title subTitle='Gallery' title='Campus Photos'/>
          <Campus />

          <Title subTitle='TESTIMONIALS' title='What Student Says'/>
          <Testimonials />

          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact />

          <Footer />

        </div>

        <VideoPlayer
          playState={playState}
          setPlayState={setPlayState}
        />
        
      </div>
      
    </>
  )
}

export default App