"use client";

import Image from "next/image";
const teamMembers = [
  {
    id: 1,
    name: "Handmade Mochi Donuts ",
    position: "Freshly made daily for the perfect chew.",
    img: "/emp1.png",
  },
  {
    id: 2,
    name: "Premium Boba Tea",
    position: "Smooth, refreshing, and just the right amount of sweet.",
    img: "/emp2.png",
  },
  {
    id: 3,
    name: "And LOTS more...",
    position: "Come visit us and try!",
    img: "/emp3.png",
  },
  // Add more as needed. Later we can add backend instead
];
export default function About() {
  return (
    <div className="min-h-screen bg-[#333] text-white flex flex-col items-center pt-32 p-8 sm:p-24 sm:pt-24 pb-32 gap-16">
      {/* Header Section */}
      <header className="text-center fade-in mt-8">
        <h1 className="text-5xl font-bold">
          About <span className="text-yellow-400">MochiNut</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto"></p>
      </header>

      {/* Our Story Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center fade-in-slide">
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400">Who We Are</h2>
          <p className="mt-4 text-lg">
            At MochiNut, we believe life is too short for boring desserts.
            That’s why we craft the fluffiest, chewiest mochi donuts and pair
            them with the most slurpable boba tea in existence. Whether you’re
            here for a quick treat or a full-on sugar pilgrimage, we’ve got your
            cravings covered.
          </p>
        </div>
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src="/boutus1.png"
            alt="MochiNut store"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center fade-in-slide">
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src="/boutus2.png"
            alt="Fresh donuts"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400">Our Vision</h2>
          <p className="mt-4 text-lg">
            To spread joy, one gloriously chewy bite at a time. We’re on a quest
            to make the world a better place with fried dough and tapioca
            pearls—because happiness is just a donut and a boba away.
          </p>
        </div>
      </section>

      {/* List Section -- Anythingcan go here*/}

      <section className="text-center fade-in mb-16">
        <h2 className="text-3xl font-semibold text-yellow-400">
          Visit Us and Enjoy!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="relative w-40 h-40">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-medium">{member.name}</p>
              <p className="text-sm text-gray-400">{member.position}</p>
            </div>
          ))}
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
