import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
//import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MochiNut - Mochi Donuts & Bubble Tea',
  description: 'Handcrafted mochi donuts and premium bubble tea at MochiNut.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}