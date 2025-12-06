"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login"); // redirect handled client-side
  };

  return (
    <div className="mt-auto">
      <button
        className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        onClick={handleLogout}
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </div>
  );
}
