"use client";
import NavBar from "@/components/Navbar/NavBar";
import Sidebar from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import type { Metadata } from 'next';

import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
  });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  
  return <>
  
    <div className="flex items-start justify-between">
        <Sidebar/>
        <div className="w-full h-full">
            {children}
        </div>
        
    </div>
    
         
  </>;
}
