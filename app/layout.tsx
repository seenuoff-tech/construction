import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import EntryPopup from '@/components/EntryPopup';
import AdminHider from '@/components/AdminHider';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Luxury Architecture',
  description: 'Awwwards-winning cinematic construction, architecture and real-estate website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans bg-black text-white antialiased`}>
        <AdminHider>
          <Navbar />
        </AdminHider>
        {children}
        <AdminHider>
          <FloatingContact />
          <Footer />
          <EntryPopup />
        </AdminHider>
      </body>
    </html>
  );
}
