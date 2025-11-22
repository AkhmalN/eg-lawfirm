"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";

export default function ContactPage() {
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

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section
        className="py-24  text-white"
        style={{ backgroundImage: `url(${LawBackground.src})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Schedule a consultation with our experienced legal team
            </p>
          </motion.div>
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
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Office Address
                    </h3>
                    <p className="text-slate-600">
                      Jl. Sudirman No. 123
                      <br />
                      Jakarta Pusat 10220
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+62 21 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@elmongultom.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Office Hours
                </h3>
                <p className="text-slate-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-slate-600">Sunday: Closed</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Input
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message *"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                {submitted && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                    Thank you! We`ll get back to you soon.
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
          </div>
        </div>
      </motion.section>
    </div>
  );
}
