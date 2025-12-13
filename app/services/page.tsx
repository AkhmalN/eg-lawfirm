"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";

export default function ServicesPage() {
  // ====== Array services per category ======
  const mainServices = [
    { title: "Litigasi (Perdata, Pidana, Tata Usaha Negara)" },
    { title: "Non-Litigasi: Drafting & Review Kontrak" },
    { title: "Legal Opinion (Pendapat Hukum)" },
    { title: "Legal Audit & Due Diligence" },
    { title: "Mediasi & Negosiasi" },
    { title: "Corporate Legal Services" },
  ];
  const litigationServices = [
    { title: "Perkara Pidana" },
    { title: "Perkara Perdata" },
    { title: "Sengketa Tata Usaha Negara" },
    { title: "Judicial Review" },
    { title: "PHPU" },
    { title: "PKPU" },
    { title: "Kepailitan" },
    { title: "Arbitrase" },
  ];
  const nonLitigationServices = [
    { title: "Pembuatan & Review Kontrak" },
    { title: "Legal Drafting" },
    { title: "Legal Opinion" },
    { title: "Legal Audit" },
    { title: "Legal Reasoning" },
    { title: "Legislative Drafting" },
    { title: "Pembuatan SOP & Kebijakan" },
    { title: "Legal Compliance" },
  ];

  const PlusIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="16"
        y1="8"
        x2="16"
        y2="24"
        stroke="#29488a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="16"
        x2="24"
        y2="16"
        stroke="#29488a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  // ====== Section rendering like About page inspiration ======
  const renderServiceList = (
    sectionTitle: string,
    sectionDesc: string,
    list: { title: string }[],
    accentColor = "#1abc9c"
  ) => (
    <section className="py-5 md:py-16 px-4 sm:px-8 bg-[#f5f8fb]">
      <div className="w-full mx-auto max-w-7xl">
        <div className="max-w-3xl mb-10">
          <SectionHeader
            title={sectionTitle}
            titleColor="#29488a"
            bgColor={accentColor}
          />
          <h2 className="text-3xl sm:text-4xl font-light text-[#29488a] leading-tight mb-4">
            {sectionDesc}
          </h2>
        </div>
        <div className="divide-y divide-blue-100 bg-[#f5f8fb]">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="flex items-center justify-between py-8 px-2 group hover:bg-blue-50/40 transition-colors duration-200 cursor-pointer"
            >
              <span className="text-2xl sm:text-2xl font-light text-[#29488a]">
                {item.title}
              </span>
              {/* <span className="ml-4 transition-transform duration-200 group-hover:scale-125">
                <PlusIcon />
              </span> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-[#f5f8fb]">
      <Navbar />
      {/* HERO SECTION */}
      <section className="py-16 md:pt-44 md:pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="What We Do"
            titleColor="#29488a"
            bgColor="#27ae60"
          />
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-light text-[#29488a] leading-tight mb-4">
              Our work for local, foreign and multinational clients extends
              spans specialist areas
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide an informed perspective on issues faced by companies
              navigating Indonesia’s legal landscape. We have the depth and
              breadth of Indonesian legal experience and knowledge to deliver
              creative commercial solutions to real-world business problems.
            </p>
          </div>
        </div>
        {/* Full-width image below hero */}
        <div className="relative w-full h-[260px] md:h-[520px] mt-10">
          <Image
            src="/images/jakarta-city.jpg"
            alt="Jakarta City"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
      {/* Main Services */}
      {renderServiceList(
        "Main Services",
        "Comprehensive legal services for individuals and companies, both litigation and non-litigation.",
        mainServices,
        "#f39c12"
      )}
      {/* Litigation Services */}
      {renderServiceList(
        "Litigation Services",
        "Legal assistance in court and other legal institutions to protect clients' rights and interests.",
        litigationServices,
        "#b24592"
      )}
      {/* Non-Litigation Services */}
      {renderServiceList(
        "Non-Litigation Services",
        "Preventive and administrative legal services, including drafting, audit, compliance, and company policies.",
        nonLitigationServices,
        "#27ae60"
      )}
      <Footer />
    </div>
  );
}
