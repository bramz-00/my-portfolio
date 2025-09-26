// import { BentoGridDemo } from "@/components/organisms/BentoGrid"
import Layout from "@/components/templates/Layout"
import AboutSection from "@/components/sections/Home/AboutSection"
import Experiances from "@/components/sections/Home/ExperianceSection"
import ProjectSection from "@/components/sections/Home/ProjectSection"
import SkillSection from "@/components/sections/Home/SkillSection"
import Education from "@/components/sections/Home/EducationSection"
import HeroSection from "@/components/sections/Home/HeroSection"

const Home = () => {

    return (
        <Layout isHomepage={true}>
            <HeroSection/>
            <AboutSection />
            <ProjectSection />
            {/* <BentoGridDemo /> */}
            <Experiances />
            <SkillSection />
            <Education />
        </Layout>
    )
}

export default Home