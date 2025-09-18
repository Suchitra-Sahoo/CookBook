import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/landing-page/Hero";
import Features from "../components/landing-page/Features";
import HowItWorks from "../components/landing-page/HowItWorks";
import PopularRecipes from "../components/landing-page/PopularRecipes";
import CTA from "../components/landing-page/CTA";
import Footer from "../components/common/Footer";
import Testimonials from "../components/landing-page/Testimonials";
import Faq from "../components/landing-page/Faq";
import Loader from "../components/common/Loader/Loader";

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; 

  return (
    <>
      <Navbar />
      <Hero />
      <PopularRecipes />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Faq />
      <Footer />
    </>
  );
}

export default LandingPage;
