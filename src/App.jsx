import React from 'react'
import Heder from './components/Heder'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Courses from './components/Courses'

const App = () => {
  return (
   <>
   <Heder/>
   <main>
     <Hero/>
     <Benefits/>
     <Courses/>
   </main>
 
   </>
  )
}

export default App