'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Image carousel */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Colorful MochiNut donuts in a box"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience the Magic of <span className="text-yellow-400">MochiNut</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Handcrafted mochi donuts with unique flavors that blend Japanese
            and Western dessert traditions into a perfect sweet treat.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/menu">
              <span className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-medium transition-colors">
                View Our Menu
              </span>
            </Link>
            <Link href="/order">
              <span className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full font-medium transition-colors">
                Order Online
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}