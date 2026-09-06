import Hero from './Components/Pages/Hero'
import Nav from './Components/Tools/Nav';
import ColorBlob from './Components/Tools/ColorBlob'
import Services from './Components/Pages/Services';
import Info from './Components/Pages/Info';
import Portfolio from './Components/Pages/Portfolio';
import Footer from './Components/Pages/Footer';
import SixStepApproach from './Components/Pages/SixStepApproach';
import Contact from './Components/Pages/Contact';


const App = () => { 
  return (
    <section className='relative min-h-screen w-full overflow-x-hidden bg-sky-100'>
      <ColorBlob />
      <div className='px-3 pt-3 sm:px-6 sm:pt-5 md:px-10'>
        <Nav/>
      </div>
      <Hero/>
      <Info/>
      <Services/>
      <SixStepApproach/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default App
