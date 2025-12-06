"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function HeroContact() {
  return (
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
          Hubungi Kami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl sm:text-2xl text-slate-200"
        >
          Jadwalkan konsultasi dengan tim hukum berpengalaman kami.
        </motion.p>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <motion.div variants={fadeInUp} className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Hubungi kami :</h2>

      {/* Phone & Email tetap sama */}
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
          <p className="text-slate-600">0821-2875-9115</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
          <p className="text-slate-600">eglawfirm19@gmail.com</p>
        </div>
      </div>

      {/* Kantor Pusat */}
      <div className="space-y-2">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Kantor Pusat</h3>
            <p className="text-slate-600">
              Jl. H. Sa`aba No.10, RT.13/RW.2, Meruya Sel., Kec. Kembangan, Kota
              Jakarta Barat, DKI Jakarta 11650
            </p>
          </div>
        </div>
        <div className="w-full h-64 mt-2 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.123456789!2d106.751!3d-6.177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0c0f0f0f0f0%3A0x1234567890abcdef!2sJl.%20H.%20Sa`aba%20No.10!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Kantor Cabang Bali */}
      <div className="space-y-2">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Kantor Cabang Bali
            </h3>
            <p className="text-slate-600">
              Jl. Trenggana No.135, Penatih, Kec. Denpasar Timur, Kota Denpasar,
              Bali 80238
            </p>
          </div>
        </div>
        <div className="w-full h-64 mt-2 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.123456!2d115.234!3d-8.656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247f6b8f8f8f8%3A0xabcdef1234567890!2sJl.%20Trenggana%20No.135!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Kantor Cabang Medan */}
      <div className="space-y-2">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Kantor Cabang Medan
            </h3>
            <p className="text-slate-600">
              Jl. Suka No 24 Kelurahan Setia Rejo Kecamatan Medan Kota, Kota
              Medan 20212 Sumut
            </p>
          </div>
        </div>
        <div className="w-full h-64 mt-2 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456!2d98.675!3d3.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313123abcde%3A0xabcdef123456!2sJl.%20Suka%20No.24!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div variants={fadeInUp}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder="Your Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Input
          placeholder="Subject *"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          required
        />
        <Textarea
          placeholder="Your Message *"
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />

        {submitted && (
          <div className="p-4 bg-green-50 text-green-800 rounded-lg">
            Thank you! We&apos;ll get back to you soon.
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-slate-900 hover:bg-slate-800"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-slate-50">
        <HeroContact />
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
