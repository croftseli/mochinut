'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const mochiDonuts = [
  {
    name: 'Strawberry',
    description: 'A sweet and fruity delight with a fresh strawberry glaze.',
    image: '/images/mochiDonuts/strawberry.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Yuzu',
    description: 'Zesty citrus flavor with a tangy twist.',
    image: '/images/mochiDonuts/yuzu.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Yogurt',
    description: 'Smooth and creamy with a light, tangy yogurt glaze.',
    image: '/images/mochiDonuts/yogurt.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Ube',
    description: 'A rich and nutty purple yam flavor with a hint of vanilla.',
    image: '/images/mochiDonuts/ube.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Taro',
    description: 'Earthy and subtly sweet taro glaze with a creamy texture.',
    image: '/images/mochiDonuts/taro.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Milk Pebble',
    description: 'A sweet and milky glaze with a crunchy cereal topping.',
    image: '/images/mochiDonuts/milkPebble.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Churro',
    description: 'A cinnamon-sugar-coated mochi donut with a hint of vanilla.',
    image: '/images/mochiDonuts/churro.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Coffee',
    description: 'Bold and aromatic coffee glaze with a smooth finish.',
    image: '/images/mochiDonuts/coffee.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Ube Original',
    description: 'Classic ube flavor with a rich, creamy purple yam glaze.',
    image: '/images/mochiDonuts/ubeOriginal.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
  {
    name: 'Chocolate',
    description: 'Decadent chocolate glaze with a rich and smooth texture.',
    image: '/images/mochiDonuts/chocolate.png',
    nutrition: {calories: 250, fat: '10g', carbs: '35g', protein: '3g',},
  },
];

const mochiBalls = [
  {
    name: "Original",
    description: "Classic mochi balls with a soft and chewy texture.",
    image: "/images/mochiBalls/original.png",
    nutrition: { calories: 150, fat: "3g", carbs: "25g", protein: "2g" },
  },
  {
    name: "Cookies & Cream",
    description: "Crunchy cookie bits with a creamy vanilla filling.",
    image: "/images/mochiBalls/cookiesCream.png",
    nutrition: { calories: 180, fat: "5g", carbs: "30g", protein: "3g" },
  },
  {
    name: "Creme Brulee",
    description: "Rich and creamy custard with a caramelized sugar topping.",
    image: "/images/mochiBalls/cremeBrulee.png",
    nutrition: { calories: 200, fat: "6g", carbs: "35g", protein: "4g" },
  },
  {
    name: "Coffee",
    description: "Bold and aromatic coffee glaze with a smooth finish.",
    image: "/images/mochiBalls/coffee.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Matcha",
    description: "Smooth and creamy matcha with a hint of sweetness.",
    image: "/images/mochiBalls/matcha.png",
    nutrition: { calories: 180, fat: "5g", carbs: "25g", protein: "4g" },
  },
  {
    name: "Strawberry",
    description: "Sweet and fruity strawberry filling with a hint of tartness.",
    image: "/images/mochiBalls/strawberry.png",
    nutrition: { calories: 170, fat: "4g", carbs: "28g", protein: "3g" },
  },
];

const hotDogs = [
  {
    name: "Original",
    description: "Classic beef hot dog with ketchup and mustard.",
    image: "/images/hotdogs/original.png",
    nutrition: { calories: 250, fat: "15g", carbs: "20g", protein: "10g" },
  },
  {
    name: "Half & Half",
    description: "Half beef, half mozzarella hot dog with a blend of spices.",
    image: "/images/hotdogs/halfHalf.png",
    nutrition: { calories: 280, fat: "18g", carbs: "22g", protein: "12g" },
  },
  {
    name: "Mozzarella",
    description: "Hot dog with a gooey mozzarella cheese filling.",
    image: "/images/hotdogs/mozzarella.png",
    nutrition: { calories: 270, fat: "17g", carbs: "21g", protein: "11g" },
  },
];

const drinks = [
  {
    name: "Peach Mango",
    description: "Sweet and tangy peach mango bubble tea.",
    image: "/images/drinks/peachMango.png",
    nutrition: { calories: 180, fat: "5g", carbs: "30g", protein: "3g" },
  },
  {
    name: "Grapefruit Orange",
    description: "Refreshing grapefruit orange bubble tea with a citrus twist.",
    image: "/images/drinks/grapefruitOrange.png",
    nutrition: { calories: 160, fat: "4g", carbs: "28g", protein: "2g" },
  },
  {
    name: "Cherry Berry",
    description: "Sweet and tart cherry berry bubble tea with a fruity flavor.",
    image: "/images/drinks/cherryBerry.png",
    nutrition: { calories: 170, fat: "4g", carbs: "29g", protein: "3g" },
  },
];

const iceCream = [
  {
    name: "Original",
    description: "Classic vanilla ice cream with a creamy texture.",
    image: "/images/iceCream/original.png",
    nutrition: { calories: 200, fat: "10g", carbs: "25g", protein: "5g" },
  },
  {
    name: "Honey Butter",
    description: "Rich and buttery honey ice cream with a hint of sweetness.",
    image: "/images/iceCream/honeyButter.png",
    nutrition: { calories: 220, fat: "12g", carbs: "27g", protein: "6g" },
  },
  {
    name: "Strawberry Lemon",
    description: "Sweet strawberry ice cream with a zesty lemon twist.",
    image: "/images/iceCream/strawberryLemon.png",
    nutrition: { calories: 210, fat: "11g", carbs: "26g", protein: "5g" },
  },
  {
    name: "Melon",
    description: "Refreshing melon ice cream with a light and fruity flavor.",
    image: "/images/iceCream/melon.png",
    nutrition: { calories: 190, fat: "9g", carbs: "24g", protein: "4g" },
  },
];


export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("Mochi Donuts");

  const getMenuItems = () => {
    if (activeTab === "Mochi Donuts") return mochiDonuts;
    if (activeTab === "Mochi-Balls") return mochiBalls;
    if (activeTab === "Hotdogs") return hotDogs;
    if (activeTab === "Drinks") return drinks;
    if (activeTab === "Ice Cream") return iceCream;
    return [];
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
      {/* Title */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-amber-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Menu:
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore our delicious offerings!
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {["Mochi Donuts", "Mochi-Balls", "Hotdogs", "Drinks", "Ice Cream"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-amber-700 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {getMenuItems().map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setSelectedItem(item)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              layout="responsive"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-amber-700">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Nutritional Info */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <h2 className="text-3xl font-bold text-amber-700">
                {selectedItem.name}
              </h2>
              <p className="text-gray-600 mt-2">{selectedItem.description}</p>
              <div className="mt-4 text-gray-800">
                <p>
                  <strong>Calories:</strong> {selectedItem.nutrition.calories}{" "}
                  kcal
                </p>
                <p>
                  <strong>Fat:</strong> {selectedItem.nutrition.fat}
                </p>
                <p>
                  <strong>Carbs:</strong> {selectedItem.nutrition.carbs}
                </p>
                <p>
                  <strong>Protein:</strong> {selectedItem.nutrition.protein}
                </p>
              </div>
              <button
                className="mt-4 bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}