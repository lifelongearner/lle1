// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar'; // Import Navbar

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <main className="container mx-auto p-4">{children}</main> {/* Added some basic styling to main */}
    </>
  );
};

export default Layout;
