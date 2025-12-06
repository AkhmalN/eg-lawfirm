"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-4">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
            404
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-xl mx-auto">
            Halaman Tidak Ditemukan. Data yang Anda cari mungkin tidak ada.
          </p>
          <Button
            variant="default"
            size="lg"
            className={cn(
              "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
              "hover:from-yellow-600 hover:to-orange-600",
              "px-8 py-3 rounded-full shadow-lg hover:shadow-xl",
              "transition-all duration-300"
            )}
            onClick={() => (window.location.href = "/")}
          >
            Kembali ke Beranda
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
