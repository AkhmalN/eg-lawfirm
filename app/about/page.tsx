"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";
import Lawyer from "@/assets/companies-people.jpg";
import LawyerPendiri from "@/assets/pendiri.jpeg";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "WORK SMART",
      description:
        "Memberikan nasihat hukum, mendiskusikan pilihan serta ikut mengambil instruksi tentang apa yang ingin dilakukan oleh klien.",
    },
    {
      icon: Users,
      title: "INTEGRITY",
      description:
        "Tindakan yang konsisten, sesuai dengan kebijakan dan kode etik dan peraturan perundang-undangan.",
    },
    {
      icon: Heart,
      title: "LOYALTY",
      description:
        "Membuat pengungkapan penuh dan jujur kepada klien tentang hubungan advokat dengan pihak lain dan kepentingan lain dalam kasus tersebut.",
    },
  ];

  const missions = [
    "Memberikan solusi terbaik dalam penyelesaian permasalahan hukum yang dihadapi klien.",
    "Menjunjung tinggi kredibilitas dalam penegakan hukum serta memiliki semangat dan komitmen yang tinggi dalam mencari solusi terbaik bagi kepentingan klien.",
    "Memformulasikan kreativitas argumentasi hukum sebagai alternatif dalam penyelesaian persoalan hukum.",
    "Menjaga integritas, moral, dan etika yang baik dalam penegakan hukum.",
    "Menjadi komunikator dan mempresentasikan pendapat hukum (legal opinion) dengan baik.",
  ];

  return (
    <div className="pt-20">
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
            Tentang Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl sm:text-2xl text-slate-200"
          >
            Mitra hukum terpercaya dalam menemukan keadilan dan menyelesaikan
            setiap persoalan dengan integritas.
          </motion.p>
        </div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  EG Law Firm (Elmon Gultom Law Firm) merupakan kantor hukum
                  profesional yang berfokus pada pemberian layanan jasa hukum
                  secara komprehensif, strategis, dan berintegritas tinggi.
                  Berkantor di Jakarta dan Bali, kami hadir untuk memenuhi
                  kebutuhan klien perorangan maupun korporasi dengan pendekatan
                  hukum yang modern, solutif, dan berorientasi pada hasil.
                </p>
                <p>
                  Didukung oleh advokat berpengalaman, EG Law Firm berkomitmen
                  untuk memberikan pendampingan hukum yang efektif, responsif,
                  dan sesuai dengan prinsip keadilan serta kode etik profesi.
                  Dengan pemahaman mendalam terhadap dinamika regulasi dan
                  perkembangan dunia bisnis, kami memastikan setiap langkah
                  hukum yang kami ambil mampu memberikan perlindungan dan nilai
                  tambah bagi klien
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <Image
                    src={Lawyer}
                    alt={`Partner `}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <SectionDivider />
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=""
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <Image
                    src={LawyerPendiri}
                    alt={`Elmon Gultom, S.H., M.H.`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Pendiri Kami
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>Elmon Gultom, S.H., M.H.</strong> adalah Managing
                  Partner sekaligus pendiri EG Law Firm.
                </p>
                <p>
                  Sebagai pendiri EG Law Firm, beliau memiliki pengalaman dalam
                  menangani berbagai perkara hukum baik litigasi maupun
                  non-litigasi. Dedikasi terhadap keadilan, kemampuan negosiasi
                  yang kuat, serta pemahaman mendalam mengenai hukum di
                  Indonesia menjadikan EG Law Firm partner terpercaya bagi
                  setiap klien.
                </p>
                <p>
                  Dengan rekam jejak dalam mewakili klien dari berbagai sektor,
                  beliau selalu mengedepankan analisis yang tajam, strategi yang
                  tepat, serta penyelesaian yang berfokus pada hasil terbaik
                  bagi klien.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <SectionDivider />
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=""
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                {/* <Eye className="w-12 h-12 text-slate-900" /> */}
                <h2 className="text-4xl font-bold text-slate-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Menjadi Partners Terbaik, Unggul dan Terkemuka dalam pencarian
                Keadilan dan Kebenaran baik di tingkat regional, nasional dan
                internasional.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                {/* <Target className="w-12 h-12 text-slate-900" /> */}
                <h2 className="text-4xl font-bold text-slate-900">
                  Our Mission
                </h2>
              </div>

              <ul className="space-y-4 text-lg text-slate-600 leading-relaxed list-disc pl-6">
                {missions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <SectionDivider />
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pb-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-xl p-8 flex flex-col items-center justify-center text-center h-full"
              >
                <value.icon className="w-12 h-12 text-slate-900 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
