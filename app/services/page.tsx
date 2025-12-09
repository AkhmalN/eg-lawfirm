"use client";

import { motion } from "framer-motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";
import { Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  // ====== Array services per category ======
  const mainServices = [
    {
      title: "Litigasi (Perdata, Pidana, Tata Usaha Negara)",
      description:
        "Pendampingan penuh dalam penyelesaian perkara di pengadilan, mulai dari penyusunan strategi hingga representasi resmi di setiap proses persidangan.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Non-Litigasi: Drafting & Review Kontrak",
      description:
        "Penyusunan dan peninjauan kontrak untuk memastikan setiap klausul melindungi kepentingan klien dan sesuai ketentuan hukum.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legal Opinion (Pendapat Hukum)",
      description:
        "Analisis hukum tertulis yang memberikan panduan jelas, profesional, dan dapat dipertanggungjawabkan dalam pengambilan keputusan.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legal Audit & Due Diligence",
      description:
        "Pemeriksaan menyeluruh terhadap dokumen dan kegiatan perusahaan untuk memastikan kepatuhan dan mengidentifikasi potensi risiko hukum.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Mediasi & Negosiasi",
      description:
        "Pendekatan alternatif penyelesaian sengketa secara efektif dan efisien untuk mencapai kesepakatan terbaik tanpa melalui pengadilan.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Corporate Legal Services",
      description:
        "Layanan hukum bagi perusahaan, meliputi pendampingan operasional, kepatuhan, kontraktual, hingga penanganan sengketa bisnis.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  const litigationServices = [
    {
      title: "Perkara Pidana",
      description:
        "Mewakili dan mendampingi client sebagai pelapor atau terlapor di penyelidikan, penyidikan, dan penuntutan Di Pengadilan, berbasis bukti dan fakta persidangan secara profesional.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Perkara Perdata",
      description:
        "Hal hal yang mencakup Perkara PMH, Wanprestasi, Sengketa bisnis, Perceraian, sengketa tanah, sengketa waris dan keluarga, Ketenagakerjaan.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Sengketa Tata Usaha Negara",
      description:
        "Mewakili klien dalam sengketa yang melibatkan keputusan administratif pemerintah untuk memastikan hak-hak klien terlindungi.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Judicial Review",
      description:
        "Hak uji materi atau proses pengujian peraturan perundang-undangan terhadap norma dalam suatu pasal di lembaga mahkamah konstitusi dan mahkamah agung.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "PHPU",
      description:
        "Perselisihan tentang hasil pemilihan umum antara KPU dan peserta pemilu mengenai penetapan perolehan suara hasil pemilu secara nasional di lembaga mahkamah konstitusi.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "PKPU",
      description:
        "Prosedur hukum untuk memberikan kesempatan kepada debitur yang tidak mampu membayar utangnya agar bisa merestrukturisasi kewajiban dan menghindari kebangkrutan (kepailitan) di Pengadilan Niaga.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Kepailitan",
      description:
        "Badan hukum yang tidak mampu membayar utang-utangnya yang sudah jatuh tempo ditetapkan melalui putusan pengadilan setelah diajukan permohonan oleh debitur atau kreditur di Pengadilan Niaga.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Arbitrase",
      description:
        "Penyelesaian sengketa di luar pengadilan umum yang didasarkan pada kesepakatan tertulis antara para pihak yang bersengketa untuk menyerahkan masalah mereka kepada satu atau lebih arbiter yang independen untuk diputuskan.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  const nonLitigationServices = [
    {
      title: "Pembuatan & Review Kontrak",
      description:
        "Penyusunan kontrak yang jelas, aman, dan legal untuk meminimalkan risiko dan memperjelas hubungan kerja sama.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legal Drafting",
      description:
        "Penyusunan dokumen hukum yang akurat dan efektif, seperti kontrak, perjanjian, surat kuasa, dan wasiat. Prosesnya meliputi pengumpulan informasi, analisis, pembuatan draft, revisi, hingga finalisasi untuk memastikan hak-kewajiban jelas dan risiko sengketa dapat dihindari.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legal Opinion",
      description:
        "Pemberian pendapat hukum berdasarkan fakta dan aturan yang berlaku untuk membantu klien mengambil keputusan tepat. Berisi analisis masalah, potensi risiko, serta rekomendasi tindakan dalam konteks transaksi bisnis, sengketa, ataupun kepatuhan hukum.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legal Audit",
      description:
        "Pemeriksaan dokumen dan aktivitas hukum perusahaan untuk memastikan kepatuhan dan meminimalkan risiko. Meliputi evaluasi kontrak, HKI, ketenagakerjaan, pajak, serta aspek lingkungan guna meningkatkan efisiensi dan mengurangi potensi kerugian.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legal Reasoning",
      description:
        "Proses analisis hukum secara logis dan sistematis: mengidentifikasi masalah, mengumpulkan fakta, menilai aturan dan argumen, lalu menarik kesimpulan hukum yang tepat.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legislative Drafting",
      description:
        "Penyusunan peraturan dan norma hukum (UU, PP, Perda) secara sistematis agar jelas, memiliki kepastian hukum, dan minim salah tafsir.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Pembuatan SOP & Kebijakan",
      description:
        "Penyusunan SOP dan dokumen kebijakan operasional perusahaan, mulai dari rekrutmen, disiplin kerja, administrasi, rapat direksi, hingga manajemen kinerja dan penanganan konflik, guna memastikan sistem kerja yang tertib dan efektif.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Legal Compliance",
      description:
        "Layanan kepatuhan hukum untuk memastikan bahwa perusahaan menjalankan kegiatan sesuai peraturan yang berlaku dan bebas dari potensi sengketa.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  // ====== Function to render a section ======
  const renderSection = (
    title: string,
    description: string,
    servicesArray: any[]
  ) => (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-start mb-12 px-6 max-w-4xl">
        <h2 className="text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
          {title}
        </h2>

        <div className="w-24 h-[2px] bg-yellow-600 mb-4" />

        <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesArray.map((item, idx) => (
          <div key={idx}>
            <div className="relative h-[380px] overflow-hidden group rounded-2xl shadow-lg">
              {/* Background Card Orange */}
              <div className="absolute inset-0 bg-yellow-600 opacity-70 transition-all duration-700 hover:bg-yellow-900" />

              {/* Overlay Noise saat hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')] pointer-events-none transition-opacity duration-500" />

              {/* Icon Scale */}
              <div className="absolute top-4 right-4 text-white">
                <Scale size={32} />
              </div>

              {/* Bercak putih di kanan bawah */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse delay-300"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-150"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-50 animate-pulse"></div>
              </div>
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full opacity-50 animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-150"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse delay-300"></div>
              </div>

              {/* Konten Card */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h3 className="text-2xl font-semibold tracking-wide leading-snug">
                  {item.title}
                </h3>
                <div className="w-24 h-[1px] bg-white/50 mb-3" />
                <p className="mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div>
      <Navbar />
      <div className="">
        {/* Hero Section */}
        <section
          className="py-32 text-white relative bg-cover bg-center"
          style={{ backgroundImage: `url(${LawBackground.src})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-4xl mx-auto text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
            >
              Layanan Hukum Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl sm:text-2xl text-slate-200"
            >
              Solusi hukum komprehensif yang disesuaikan dengan kebutuhan Anda,
              dengan pendekatan profesional dan berintegritas.
            </motion.p>
          </div>
        </section>

        {/* Sections */}
        {renderSection(
          "Layanan Hukum Kami",
          "Berbagai layanan hukum yang mencakup litigasi dan non-litigasi untuk kebutuhan individu dan perusahaan.",
          mainServices
        )}
        {renderSection(
          "Layanan Litigasi",
          "Pendampingan hukum di pengadilan dan lembaga hukum lainnya, untuk melindungi hak dan kepentingan klien.",
          litigationServices
        )}
        {renderSection(
          "Layanan Non Litigasi",
          "Layanan hukum preventif dan administratif, termasuk drafting, audit, compliance, dan kebijakan perusahaan.",
          nonLitigationServices
        )}
      </div>
      <Footer />
    </div>
  );
}
