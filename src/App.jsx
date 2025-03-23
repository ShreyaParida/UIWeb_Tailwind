import FeaturesSection from "./components/FeaturesSection"
import FooterSection from "./components/FooterSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"

const App = () => {
  return (
    <>
    <Navbar />
    <div className="grid place-items-center max-w-7xl 
    mx-auto pt-10 px-6 text-left pl-10">
      <HeroSection/>
      <FeaturesSection/> 
      <Workflow/>
      <Pricing/>
      <Testimonials/> 
      <FooterSection/>
    </div>
    
    </>
  )
}

export default App
