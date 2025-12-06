"use client";

import { motion } from "framer-motion";
import LawBackground from "@/assets/companies-people.jpg";
import ExpertiseCarousel from "@/components/Expertise";
import WhyChoose from "@/components/WhyChoose";
import EngageToExceed from "@/components/Enggagement";
import LegalitasSection from "@/components/LegalitasSection";
import ClientsSection from "@/components/ClientsSection";
import PartnersSection from "@/components/PartnerSection";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ExpertiseCarousel />
      <SectionDivider />
      <WhyChoose />
      <SectionDivider />
      <LegalitasSection />
      <SectionDivider />
      <PartnersSection />
      <SectionDivider />
      <ClientsSection />
      <EngageToExceed />
      <Footer />
    </div>
  );
}
