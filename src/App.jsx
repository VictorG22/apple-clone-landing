import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Showcase from './components/Showcase.jsx'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Nav></Nav>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
      <Showcase></Showcase>
    </main>
  )
}

export default App
