"use client";

import Image from "next/image";

const storeLocations = [
  { id: 1, img: "/images/placeholder1.jpg", alt: "Store Image Placeholder" },
  { id: 2, img: "/images/placeholder2.png", alt: "Store Image Placeholder" },
  { id: 3, img: "/boutus1.png", alt: "Store Image Placeholder" },
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-[#333] text-white flex flex-col items-center pt-32 p-8 sm:p-24 sm:pt-24 pb-32 gap-16">
      {/* Header Section */}
      <header className="text-center fade-in mt-8">
        <h1 className="text-5xl font-bold">
          Visit Our <span className="text-yellow-400">Locations</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We can't wait to serve you delicious mochi donuts and premium bubble
          tea!
        </p>
      </header>

      {/* Store Images Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl fade-in-slide">
        {storeLocations.map((location) => (
          <div
            key={location.id}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={location.img}
                alt={location.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Address Section */}
      <section className="text-center fade-in-slide">
        <h2 className="text-3xl font-semibold">📍 Our Address</h2>
        <p className="mt-4 text-lg">1021 Jim Warren Pkwy, Suite 220</p>
        <p className="text-lg">Spring Hill, TN 37174</p>
      </section>

      {/* Visit Us Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center fade-in-slide">
        <div>
          <h2 className="text-3xl font-semibold">Opening Hours</h2>
          <p className="mt-4 text-lg">
            Monday - Thursday: 11am - 8pm
            <br />
            Friday - Saturday: 11am - 9pm
            <br />
            Sunday: 12pm - 7pm
          </p>
        </div>
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src="/images/placeholder3.jpg"
            alt="MochiNut store"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 1.5s ease-in;
        }
        .fade-in-slide {
          animation: fadeInSlide 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
