"use client";

import { Scale } from "lucide-react";

export default function SectionDivider() {
  return (
    <div className="relative w-full my-20 flex justify-center items-center">
      {/* Garis ganda */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t-[1px] border-yellow-400 opacity-70"></div>
        <div className="w-full border-t-[3px] border-yellow-500 absolute top-1/2 transform -translate-y-1/2 opacity-100"></div>
      </div>

      {/* Ikon timbangan di tengah */}
      <div className="relative bg-white px-4 flex items-center justify-center">
        <Scale className="w-8 h-8 text-yellow-500" />
      </div>
    </div>
  );
}
