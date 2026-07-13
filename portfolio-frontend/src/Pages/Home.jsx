import Hero from "@/components/sections/Hero.jsx";
import About from "@/components/sections/About.jsx";
import Skills from "@/components/sections/Skills.jsx"

const HomePage = () => {
    return (
        <>
            <section >
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="projects">
                <h1></h1>
            </section>

            <section id="contact">
                <h1></h1>
            </section>
        </>
    );
};

export default HomePage;