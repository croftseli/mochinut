'use client';

import Link from 'next/link';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="bg-zinc-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="/logo.jpg" 
              alt="MochiNut Logo" 
              width={150} 
              height={70} 
              className="mb-4 invert" // Inverts colors to make logo white
            />
            <p className="text-gray-300 mb-6 text-center md:text-left">
              Handcrafted mochi donuts and premium bubble tea with unique flavors that blend Japanese and Western dessert traditions.
            </p>
            <div className="flex space-x-4">
            <a 
                href="https://instagram.com/mochinutspringhilltn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-600 hover:bg-amber-500 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/mochinut-spring-hill/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-600 hover:bg-amber-500 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-600 hover:bg-amber-500 transition-colors p-2 rounded-full"
                aria-label="TikTok"
              >
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M16.6 5.82C15.9165 5.0364 15.5197 4.02841 15.48 2.98H12.5V15.23C12.4561 15.7054 12.2699 16.1589 11.9687 16.5364C11.6675 16.9139 11.2665 17.1996 10.8122 17.3577C10.3579 17.5157 9.87163 17.5394 9.4043 17.4263C8.93697 17.3131 8.5124 17.0673 8.18 16.72C7.75271 16.2882 7.49902 15.7228 7.46094 15.1218C7.42285 14.5208 7.60273 13.9282 7.97 13.45C8.3888 12.9377 8.9822 12.6288 9.62 12.59V9.6C7.8074 9.6955 6.11503 10.5808 4.9537 12.0062C3.79237 13.4316 3.26964 15.2801 3.5237 17.105C3.77776 18.93 4.78513 20.5686 6.28777 21.6879C7.7904 22.8072 9.66865 23.3304 11.5237 23.1537C13.379 22.9769 15.0768 22.1133 16.2628 20.7602C17.4488 19.4071 18.0331 17.6743 17.88 15.93V9.24C19.3201 10.3225 21.0947 10.8308 22.88 10.68V7.68C20.6867 7.73058 18.4201 7.05394 16.6 5.82Z" 
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-300 hover:text-white transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-amber-300">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold">Email:</span> info@mochinut.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (555) 123-4567
              </p>
              <p>
                <span className="font-semibold">Franchising Inquiries:</span> franchise@mochinut.com
              </p>
              <p className="pt-4">
                <Link 
                  href="/contact" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-colors inline-block mt-2"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MochiNut. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}