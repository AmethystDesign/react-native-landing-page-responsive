import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
// import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Portfolio } from "./components/sections/Portfolio";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import logo from "/assets/images/adLogoW.png";


function App() {
  return (
    <Layout title="AmethystDesign" logo={logo}>
      <Hero />
      {/* <Brands /> */}
      <Services />
      <AboutUs />
      <Portfolio />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;
