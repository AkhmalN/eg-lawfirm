import React from "react";

interface SectionHeaderProps {
  title: string;
  titleColor?: string;
  bgColor?: string; // optional
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleColor = "white",
  bgColor,
}) => {
  return (
    <div className="flex items-center gap-3 py-6">
      <span
        className="w-1 md:w-3 h-6 rounded-sm -skew-x-12"
        style={{ backgroundColor: bgColor || "#3DB54A" }}
      ></span>
      <h2
        className={`text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider font-thin`}
        style={{ color: titleColor }}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
