import Footer from "./components/Footer";
import BannerComponent from "./components/Banner";
import BenefitsSection from "./components/BeneffitsSection";

import { ServicesSection } from "./components/ServiceSection";
import TestimonialSection from "./components/Testimonials";
import SocialNetworkComponent from "./components/SocialNetwork";
import Header from "./components/Header";
import Sponsors from "./components/Sponsors";

export function Home() {
  return (
    <>
      <Header />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialSection />
      <Sponsors />
      <SocialNetworkComponent />
      <Footer />
    </>
  );
}

export default Home;
