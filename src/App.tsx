import "./App.css";
import { About } from "./components/About";
import Crafts from "./components/Crafts";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <Sponsors /> */}
      {/* <HowItWorks /> */}
      <Crafts />
      <About />
      {/* <Features /> */}
      {/* <Services /> */}
      <Cta />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
