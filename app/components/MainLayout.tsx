'use client';

import { memo } from 'react';
import Navbar from '@/src/components/Navs/Navbar';
import Footer from '@/src/components/Footer/Footer';
import ScrollToTop from '@/src/components/ScrollToTop';

const MainLayout = memo(function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
});

export default MainLayout;

