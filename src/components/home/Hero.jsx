'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Image Carousel */}
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
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experience the Magic of <span className="text-amber-300">MochiNut</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Handcrafted mochi donuts with unique flavors that blend Japanese 
              and Western dessert traditions into a perfect sweet treat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                View Our Menu
              </Link>
              
              <Link 
                href="/order"
                className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-3 rounded-full font-medium transition-colors"
              >
                Order Online
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}