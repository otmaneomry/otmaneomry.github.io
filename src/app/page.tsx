"use client"

import About from "@/app/components/first_section_about/About";
import Projects from "@/app/components/projects_section/Projects";
import Skills from "@/app/components/skills_section/Skills";
import AboutSec from "@/app/components/about_section/About";
import Contact from "@/app/components/contact_section/Contact";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
    return (
        <>
            <div className="bg-[#282C33]">
                <Navbar/>
                <About/>
                <Projects/>
                <Skills/>
                <AboutSec/>
                <Contact/>
                <Footer />
            </div>
        </>
    )
}
