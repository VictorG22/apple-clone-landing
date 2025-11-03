import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Showcase from './components/Showcase.jsx'
import Performance from './components/Performance.jsx'
import Highlights from './components/Highlights.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Highlights />
      <Footer />

    </main>
  )
}

export default App
