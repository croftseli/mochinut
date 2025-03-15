'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  {
    name: 'Strawberry',
    description: '',
    image: '/images/mochiDonuts/strawberry.jpg',
    nutrition: {
      calories: 250,
      fat: '10g',
      carbs: '35g',
      protein: '3g',
    },
  },
  {
    name: 'Yuzu',
    description: 'Zesty citrus flavor with a tangy twist.',
    image: '/images/mochiDonuts/yuzu.jpg',
    nutrition: {
      calories: 230,
      fat: '8g',
      carbs: '37g',
      protein: '2g',
    },
  },
  {
    name: 'Yogurt',
    description: '',
    image: '/images/mochiDonuts/yogurt.jpg',
    nutrition: {
      calories: 280,
      fat: '12g',
      carbs: '40g',
      protein: '4g',
    },
  },
  {
    name: 'Ube',
    description: '',
    image: '/images/mochiDonuts/ube.jpg',
    nutrition: {
      calories: 240,
      fat: '9g',
      carbs: '36g',
      protein: '3g',
    },
  },
  {
    name: 'Taro',
    description: '',
    image: '/images/mochiDonuts/taro.jpg',
    nutrition: {
      calories: 240,
      fat: '9g',
      carbs: '36g',
      protein: '3g',
    },
  },
  {
    name: 'Milk Pebble',
    description: '',
    image: '/images/mochiDonuts/milkPebble.jpg',
    nutrition: {
      calories: 240,
      fat: '9g',
      carbs: '36g',
      protein: '3g',
    },
  },
  {
    name: 'Churro',
    description: '',
    image: '/images/mochiDonuts/churro.jpg',
    nutrition: {
      calories: 240,
      fat: '9g',
      carbs: '36g',
      protein: '3g',
    },
  },
  {
    name: 'Coffee',
    description: '',
    image: '/images/mochiDonuts/coffee.jpg',
    nutrition: {
      calories: 240,
      fat: '9g',
      carbs: '36g',
      protein: '3g',
    },
  },
  {
    name: 'Ube Original',
    description: '',
    image: '/images/mochiDonuts/ubeOriginal.jpg',
    nutrition: {
      calories: 240,
      fat: '9g',
      carbs: '36g',
      protein: '3g',
    },
  },
  {
    name: 'Chocolate',
    description: '',
    image: '/images/mochiDonuts/chocolate.jpg',
    nutrition: {
      calories: 240,
      fat: '9g',
      carbs: '36g',
      protein: '3g',
    },
  },
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
      
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
          Discover our handcrafted mochi donuts!
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setSelectedItem(item)}
          >
            <Image src={item.image} alt={item.name} width={300} height={200} className="w-full h-48 object-cover" />
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
              <h2 className="text-3xl font-bold text-amber-700">{selectedItem.name}</h2>
              <p className="text-gray-600 mt-2">{selectedItem.description}</p>
              <div className="mt-4 text-gray-800">
                <p><strong>Calories:</strong> {selectedItem.nutrition.calories} kcal</p>
                <p><strong>Fat:</strong> {selectedItem.nutrition.fat}</p>
                <p><strong>Carbs:</strong> {selectedItem.nutrition.carbs}</p>
                <p><strong>Protein:</strong> {selectedItem.nutrition.protein}</p>
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
