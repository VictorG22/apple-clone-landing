import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Nav></Nav>
      <Hero></Hero>
      <ProductViewer></ProductViewer>
    </main>
  )
}

export default App
