"use client"
import { IconHome, IconUser, IconCode, IconBriefcase2, IconBulb, IconMailSpark, IconDownload, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechSection from "./components/TechSection";
import ExpSection from "./components/ExpSection";
import ProjectsSection from "./components/ProjectsSection";
import { FloatingDock } from "./components/ui/floating-dock";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const Items = [
  {
      title: "Home",
      href:"#home",
      icon: <IconHome/>
  },

  {
      title: "About",
      href: "#about",
      icon: <IconUser/>

  },

  {
      title: "Skills",
      href: "#tech",
      icon: <IconCode/>
  },


  {
      title: "Projects",
      href:"#projects",
      icon: <IconBulb/>
  },

  {
      title: "Experience",
      href: "#professional",
      icon: <IconBriefcase2/>
  },

  {
      title: "Contact",
      href:"#contact",
      icon: <IconMailSpark/>
  }


]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mx-auto py-4 px-12">
        <HeroSection className='font-sans' ></HeroSection>
        <AboutSection className='font-sans'/>
        <TechSection className='font-sans'/>
        <ProjectsSection/>
        <ExpSection className='font-sans'/>
        <ContactSection/>
        <Footer></Footer>
        
        
        <FloatingDock items={Items}   
        desktopClassName="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-full w-[360px] mx-auto z-30" 
        mobileClassName="fixed bottom-4 right-4 mx-w-[300px] mx-auto" />
      </div>
      
    </main>
  );
}
