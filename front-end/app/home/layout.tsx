import NavBar from '@/components/Navbar/NavBar';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />

      <div className=" mt-24">{children}</div>
    </>
  );
}
