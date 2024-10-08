import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechSection from "./components/TechSection";
import ExpSection from "./components/ExpSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mx-auto py-4 px-12">
        <HeroSection className='font-sans'></HeroSection>
        <AboutSection className='font-sans'/>
        <TechSection className='font-sans'/>
        <ProjectsSection/>
        <ExpSection className='font-sans'/>
        
      </div>
      
    </main>
  );
}
