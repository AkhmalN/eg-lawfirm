"use client";

import SectionHeader from "./ui/section-header";
import { Button } from "./ui/button";

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-[#f5f8fb] py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:gap-10">
        {/* Left: Section Header */}
        <div className="md:w-1/4 flex flex-col items-start md:items-end md:pr-8 mb-6 md:mb-0">
          <SectionHeader
            title="OUR EXPERTISE"
            titleColor="#"
            bgColor="#F5C857"
          />
        </div>
        {/* Right: Main Content */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#29488a] mb-8 md:mb-10 leading-tight max-w-4xl">
            E.G. Law Firm supports individuals and corporations with strategic
            legal solutions clients across multiple practice areas.
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-10 w-full">
            <p className="text-lg text-[#29488a] font-light max-w-md">
              Our expertise spans key areas of Indonesian law and has been
              refined through years of dedicated legal practice.
            </p>
            <p className="text-lg text-[#29488a] font-light max-w-md">
              We provide comprehensive expertise across essential fields of
              Indonesian law, supported by a strong track record of client
              representation.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 px-8 py-3 border-[#29488a] text-[#29488a] hover:bg-[#29488a] hover:text-white rounded-full text-base sm:text-lg font-light tracking-widest"
            asChild
          >
            <a href="/services">DISCOVER WHAT WE DO</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
