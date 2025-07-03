import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Education from "./pages/Education"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"


function App() {

  return (
    <div className="relative flex flex-col items-center justify-center">
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Education/>
    <Skills/>
    <Footer/>
    </div>
  )
}

export default App
