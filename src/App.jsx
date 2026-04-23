import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/pages/Hero";
import About from "./assets/pages/About";
import ClientMarquee from "./assets/components/ClientMarquee";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";

// New pages
import Products from "./assets/pages/Products";
import Industries from "./assets/pages/Industries";
import Contact from "./assets/pages/Contact";
import SmartCities from "./assets/pages/SmartCities"
import AboutUs from "./assets/pages/AboutUs"

// Home Page (your current layout)
const Home = () => {
  return (
    <>
    
      <Hero />
      <ClientMarquee />
      <About />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/smartcities" element={<SmartCities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;