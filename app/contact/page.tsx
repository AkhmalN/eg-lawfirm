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
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";

function HeroContact() {
  return (
    <section className="py-16 md:pt-44 md:pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto py-5 flex flex-col md:flex-row gap-5 md:gap-16">
        <SectionHeader
          title="Let's Talk"
          titleColor="#29488a"
          bgColor="#F5C857"
        />
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-5xl font-light text-[#29488a] leading-tight mb-4">
            Should you require further information about EGLawfirm or our legal
            services, please feel free to contact us at eglawfirm19@gmail.com
          </h1>
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
  );
}

function ContactInfo() {
  return (
    <motion.div variants={fadeInUp} className="space-y-8">
      <SectionHeader
        title="Contact Information"
        titleColor="#29488a"
        bgColor="#F5C857"
      />

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
            <h3 className="font-semibold text-slate-900 mb-1">
              Central Office
            </h3>
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
              Bali Branch Office
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
              Medan Branch Office
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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const form = e.currentTarget as HTMLFormElement;
    // Read honeypot value directly from the form (uncontrolled hidden input)
    const companyInput = form.querySelector(
      'input[name="company"]'
    ) as HTMLInputElement | null;
    const companyValue = companyInput?.value || "";

    // If honeypot is filled, silently treat as success (spam)
    if (companyValue) {
      setIsSubmitting(false);
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, company: companyValue }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: any) {
      console.error("Contact submit error:", err);
      setErrorMsg(err.message || "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div variants={fadeInUp}>
      <div className="mb-8">
        <SectionHeader
          title="Send Us a Message"
          titleColor="#29488a"
          bgColor="#F5C857"
        />
        <div className="mt-6">
          <p className="text-slate-600">
            If you have any questions or inquiries, please fill out the form
            below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="company" hidden value="" />
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
        {errorMsg && (
          <div className="p-4 bg-red-50 text-red-800 rounded-lg">
            {errorMsg}
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
    <div className="bg-[#f5f8fb]">
      <Navbar />
      <div className="">
        <HeroContact />
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-5 sm:mb-16 lg:mb-24"
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
