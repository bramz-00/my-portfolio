import Footer from "./components/Footer"
import Header from "./components/Header"
import { Toaster } from "./components/ui/sonner"
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
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          duration: 600,
        }} />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiances />
      <Education />
      <Footer />
    </div>
  )
}

export default App
