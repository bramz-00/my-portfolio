import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Education from "./pages/Education"
import Experiances from "./pages/Experiances"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import "./utils/i18n";


function App() {

  return (
    <div className="w-full flex flex-col items-center justify-center ">
    
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Experiances/>
    <Education/>
    <Skills/>
    <Footer/>
    </div>
  )
}

export default App
