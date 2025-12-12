import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FirmOverviewSection from "@/components/FirmOverviewSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import EngagementSection from "@/components/EngagementSection";

export default async function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <FirmOverviewSection />
      <ExpertiseSection />
      <EngagementSection />
      <Footer />
    </div>
  );
}
