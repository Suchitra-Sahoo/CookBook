import Navbar from "../components/common/Navbar";
import Hero from "../components/landing-page/Hero";
import Features from "../components/landing-page/Features";
import HowItWorks from "../components/landing-page/HowItWorks";
import PopularRecipes from "../components/landing-page/PopularRecipes";
import CTA from "../components/landing-page/CTA";
import Footer from "../components/common/Footer";
import Testimonials from "../components/landing-page/Testimonials";
import Faq from "../components/landing-page/Faq";

function LandingPage() {
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
