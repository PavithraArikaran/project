import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="grain relative min-h-screen bg-ink text-white">
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-70 h-0.5 origin-left bg-accent"
      />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <Stats />
        <Register />
      </main>

      <Footer />
    </div>
  );
}

export default App;
