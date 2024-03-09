import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="hero-sec">
        <Navbar />
        <HeroSec />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
    </main>

  );
}
