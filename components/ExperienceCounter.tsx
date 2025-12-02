"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const ExperienceCounter = () => {
  const [key, setKey] = useState(0);

  // 🔁 Trigger animasi angka setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 5000); // ganti jadi 3000 = 3 detik, 7000 = 7 detik, dll

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div>
      {/* Angka Besar */}
      <motion.h3
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="text-8xl lg:text-9xl font-extrabold text-white mb-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
      >
        <CountUp key={key} end={4} duration={2} />+
      </motion.h3>
    </motion.div>
  );
};

export default ExperienceCounter;
