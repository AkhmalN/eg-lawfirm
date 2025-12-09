import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FirmOverview from "@/components/FirmOverview";

export default async function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <FirmOverview />
      <Footer />
    </div>
  );
}
