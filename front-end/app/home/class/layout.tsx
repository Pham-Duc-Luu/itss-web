"use client";
import NavBar from "@/components/Navbar/NavBar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    !localStorage.getItem("user") && router.push("/auth/login");
  }, []);
  return <>{children}</>;
}
