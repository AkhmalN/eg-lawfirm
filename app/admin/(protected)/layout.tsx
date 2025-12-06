"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import BrandLogo from "@/assets/logo-brand.png";
import LogoutButton from "@/components/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: <Home className="w-5 h-5" /> },
    {
      name: "News",
      href: "/admin/news",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-white rounded-md shadow-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col p-6 z-50
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:static sm:h-auto
        `}
      >
        {/* Close button (mobile) */}
        <div className="sm:hidden flex justify-end mb-4">
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Brand / Logo */}
        <div className="flex items-center mb-4 gap-3">
          <Image
            src={BrandLogo}
            alt="Brand Logo"
            width={BrandLogo.width}
            height={BrandLogo.height}
            className="w-16 h-16 object-contain"
            priority
          />
          <span className="font-bold text-lg">
            Elmongultom{" "}
            <span className="font-normal text-sm text-slate-600">Admin </span>
          </span>
        </div>

        <hr />

        {/* Menu */}
        <nav className="flex-1 flex flex-col gap-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all hover:bg-gray-100 ${
                pathname === item.href
                  ? "bg-gray-200 font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setSidebarOpen(false)} // close on mobile click
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <LogoutButton />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-1 overflow-hidden">{children}</main>
    </div>
  );
}
