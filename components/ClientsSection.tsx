"use client";

import SectionHeader from "./ui/section-header";

const clients = [
  {
    name: "PT Dekorindo Mandiri",
    logo: "/images/dekorindo.png",
  },
  {
    name: "Firstmedia Fatmawati",
    logo: "/images/firstmedia.png",
  },
  {
    name: "PT Kinglab Indonesia",
    logo: "/images/kinglab.png",
  },
  {
    name: "PT Nayla Developer",
    logo: "/images/nayla.png",
  },
  {
    name: "PT Ineal's trading . Co",
    logo: "/images/ineals.png",
  },
  {
    name: "PT Citra Mutiara Agung",
    logo: "/images/citra.png",
  },
  {
    name: "PT Surya Jasa Mulya",
    logo: "/images/surya.png",
  },
  {
    name: "PT Cinco Jaya",
    logo: "/images/cinco.png",
  },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#f7fafd] py-20 px-4 md:px-8">
      <div className="max-w-5xl md:max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Header and Description */}
        <div className="flex-1 min-w-[320px] md:pr-12">
          <SectionHeader
            title="OUR CLIENTS"
            titleColor="#29488a"
            bgColor="#f39c12"
          />
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 leading-snug mb-6">
            Leading companies, institutions, and individuals who have entrusted
            their legal services to EG Law Firm are proof of our reputation and
            professional quality.
          </h2>
        </div>
        {/* Right: Clients Grid */}
        <div className="flex-[1.5] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
          {clients.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center mb-4 min-h-[80px] min-w-[120px] max-w-[160px] max-h-[80px]">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain max-h-16 max-w-[140px]"
                  loading="lazy"
                />
              </div>
              <div className="text-base text-blue-900 font-medium border-t border-blue-100 pt-2 w-full">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
