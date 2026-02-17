import React from 'react'
import Heder from './components/Heder'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Courses from './components/Courses'
import Testimonials from './components/testimonials'

const App = () => {
  return (
   <>
   <Heder/>
   <main>
     <Hero/>
     <Benefits/>
     <Courses/>
     <Testimonials/>
   </main>
 
   </>
  )
}

export default App