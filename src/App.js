import {useEffect,useRef} from 'react'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Features from './components/Features/Features'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Aos from 'aos'


function App() {
  const ref = useRef(null)
  window.onscroll = () => {
    const offset = window.pageYOffset
    if (offset > 70){
        ref.current.style.backgroundColor = '#cecfcff2'
    }else {
      ref.current.style.backgroundColor = 'unset'
    }
  }
  useEffect(() => {
    Aos.init({duration:2000})
  })
  return (
    <>
    <header className='header' ref={ref}>
        <Header/>
    </header>
    <main>
      <Landing/>
      <Features/>
      <Services/>
      <Portfolio/>
      <About/>
      <Contact/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
