import FeaturesSection from "../components/FeaturesSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Workflow from "../components/Workflow";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <FooterSection />
    </div>
  );
};

export default Home;
