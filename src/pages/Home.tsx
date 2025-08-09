import { BentoGridDemo } from "@/components/organisms/BentoGrid"
import Layout from "@/components/templates/Layout"
import About from "@/pages/About"
import Education from "@/pages/Education"
import Experiances from "@/pages/Experiances"
import Hero from "@/pages/Hero"
import Projects from "@/pages/Projects"
import Skills from "@/pages/Skills"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
const Home = () => {

    return (
        <Layout>
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <BentoGridDemo /> */}
            <Experiances />
            <Education />
        </Layout>
    )
}

export default Home