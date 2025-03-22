"use client";

import Image from "next/image";
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from "framer-motion";
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

const storeLocations = [
  { 
    id: 1, 
    img: "/images/placeholder1.jpg", 
    alt: "Spring Hill Store", 
    address: "1021 Jim Warren Pkwy, Suite 220",
    city: "Spring Hill, TN 37174",
    phone: "(615)-424-3176",
    googleMapsUrl: "https://maps.google.com/?q=1021+Jim+Warren+Pkwy+Suite+220+Spring+Hill+TN+37174"
  }
];

export default function Locations() {
  // Single location, no need for state
  const location = storeLocations[0];

  return (
    <div className="min-h-screen bg-[#333] text-white flex flex-col items-center py-24 px-4 sm:px-8 lg:px-16 gap-16">
      {/* Header Section */}
      <header className="text-center w-full max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Visit Our <span className="text-yellow-400">Store</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We can't wait to serve you delicious mochi donuts and premium bubble
          tea at our Spring Hill location.
        </motion.p>
      </header>

      {/* Store Image Section */}
      <motion.section 
        className="w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mx-auto max-w-lg">
          <div
            className="bg-[#444] shadow-lg rounded-xl overflow-hidden transition-all duration-300 border-2 border-yellow-400"
          >
            <div className="relative w-full h-64">
              <Image
                src={storeLocations[0].img}
                alt={storeLocations[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-2xl">Our Location</h3>
              <div className="flex items-start mt-4">
                <LocationOnIcon className="text-yellow-400 mr-2" fontSize="small" />
                <div>
                  <p className="text-gray-300">{storeLocations[0].address}</p>
                  <p className="text-gray-300">{storeLocations[0].city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="w-full max-w-6xl bg-[#444] rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="p-6 bg-[#444]">
          <h2 className="text-2xl font-semibold mb-4">
            Our Location
          </h2>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <div className="flex items-start mb-4">
                <LocationOnIcon className="text-yellow-400 mr-2" fontSize="small" />
                <div>
                  <p className="text-gray-300">{location.address}</p>
                  <p className="text-gray-300">{location.city}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <PhoneIcon className="text-yellow-400 mr-2" fontSize="small" />
                <p className="text-gray-300">{location.phone}</p>
              </div>
              
              <div className="flex items-start mb-4">
                <AccessTimeIcon className="text-yellow-400 mr-2" fontSize="small" />
                <div>
                  <p className="text-gray-300">Monday - Thursday: 11am - 8pm</p>
                  <p className="text-gray-300">Friday - Saturday: 11am - 9pm</p>
                  <p className="text-gray-300">Sunday: 12pm - 7pm</p>
                </div>
              </div>
              
              <a 
                href={location.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors mt-2"
              >
                <AssistantDirectionIcon className="mr-2" fontSize="small" />
                Get Directions
              </a>
            </div>
            
            <div className="md:w-2/3 relative h-64 md:h-80">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, borderRadius: "0.5rem" }}
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
                  location.address + " " + location.city
                )}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>


      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}