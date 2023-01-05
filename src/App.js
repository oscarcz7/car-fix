import Footer from "./components/Footer";
import BlogSectionOne from "./components/GridCard";
import LogoSectionOne from "./components/Sponsors";
import TeamSectionTwo from "./components/TeamSection";
import HeroSectionOne from "./pages/Home";

function App() {
  return (
    <>
      <HeroSectionOne />
      <BlogSectionOne/>
      <TeamSectionTwo />
      {/* <LogoSectionOne /> */}

      <Footer />
    </>
  );
}

export default App;
