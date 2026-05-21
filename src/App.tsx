import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { FlavorShowcase } from "./components/sections/FlavorShowcase";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FlavorShowcase />
      </main>
      <Footer />
    </div>
  );
}
