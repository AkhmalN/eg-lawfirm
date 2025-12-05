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

export default function Home() {
  return (
    <div className="overflow-hidden">
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
    </div>
  );
}
