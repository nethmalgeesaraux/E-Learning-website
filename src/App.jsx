import React from 'react'
import Heder from './components/Heder'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Courses from './components/Courses'
import Testimonials from './components/testimonials'
import FaqSec from './components/FaqSec'

const App = () => {
  return (
   <>
   <Heder/>
   <main>
     <Hero/>
     <Benefits/>
     <Courses/>
     <Testimonials/>
     <FaqSec/>
   </main>
 
   </>
  )
}

export default App