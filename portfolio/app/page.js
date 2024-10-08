import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mx-auto py-4 px-12">
        <HeroSection></HeroSection>
      </div>
    </main>
  );
}
