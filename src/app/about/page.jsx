'use client';

import Image from "next/image";
const teamMembers = [
  { id: 1, name: "Bossman", position: "CEO", img: "/emp1.jpg" },
  { id: 2, name: "Jane Smith", position: "CTO", img: "/emp2.jpg" },
  { id: 3, name: "Mike Johnson", position: "Professional Donut Maker", img: "/emp3.jpg" },
  // Add more as needed. Later we can add backend instead
];
export default function About() {
  return (
    <div className="min-h-screen bg-[#333] text-white flex flex-col items-center pt-32 p-8 sm:p-20 sm:pt-36 pb-32 gap-16">
      {/* Header Section */}
      <header className="text-center fade-in mt-8">
        <h1 className="text-5xl font-bold">About <span className="text-yellow-400">MochiNut</span></h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget.
        </p>
      </header>
     
      {/* Our Story Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center fade-in-slide">
        <div>
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="mt-4 text-lg">
            From an abrupt alchemical rebellion rose MOCHINUT — not a donut, 
            but a quantum entanglement. Rice flour colliding with destiny. 
            A texture that defies physics: pillowy resistance meets sugary surrender.

            A chew so transcendent, it rewires synapses. 
            Philosophers weep. 
            Children levitate. 
            Your dentist files for early retirement.
          </p>
        </div>
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src="/placeholder-image.jpg"
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
            src="/placeholder-image2.jpg"
            alt="Fresh donuts"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-lg">
          We see cities rebuilt around the true axis: rice flour and yearning. Laws rewritten in sprinkles. 
          A child’s first word? Mochi. Last word? Mochi. Dentists will pivot to poetry. 
          Scientists will study the crumb’s fractal echo of the universe’s birth cry. 
          Wars will stop mid-battle as soldiers pause, mouths full of paradox, and whisper: “Why?”
          </p>
        </div>
      </section>
     
      {/* Team Section */}
      <section className="text-center fade-in mb-16">
  <h2 className="text-3xl font-semibold">Meet the Team</h2>
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
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}