"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const mochiDonuts = [
  {
    name: "Strawberry",
    description: "A sweet and fruity delight with a fresh strawberry glaze.",
    image: "/images/mochiDonuts/strawberry.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Yuzu",
    description: "Zesty citrus flavor with a tangy twist.",
    image: "/images/mochiDonuts/yuzu.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Yogurt",
    description: "Smooth and creamy with a light, tangy yogurt glaze.",
    image: "/images/mochiDonuts/yogurt.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Ube",
    description: "A rich and nutty purple yam flavor with a hint of vanilla.",
    image: "/images/mochiDonuts/ube.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Taro",
    description: "Earthy and subtly sweet taro glaze with a creamy texture.",
    image: "/images/mochiDonuts/taro.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Milk Pebble",
    description: "A sweet and milky glaze with a crunchy cereal topping.",
    image: "/images/mochiDonuts/milkPebble.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Churro",
    description: "A cinnamon-sugar-coated mochi donut with a hint of vanilla.",
    image: "/images/mochiDonuts/churro.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Coffee",
    description: "Bold and aromatic coffee glaze with a smooth finish.",
    image: "/images/mochiDonuts/coffee.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Ube Original",
    description: "Classic ube flavor with a rich, creamy purple yam glaze.",
    image: "/images/mochiDonuts/ubeOriginal.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Chocolate",
    description: "Decadent chocolate glaze with a rich and smooth texture.",
    image: "/images/mochiDonuts/chocolate.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Banana Milk",
    description: "Sweet and creamy banana milk glaze with a hint of vanilla.",
    image: "/images/mochiDonuts/bananaMilk.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Black Sugar",
    description:
      "Rich and caramelized black sugar glaze with a hint of sweetness.",
    image: "/images/mochiDonuts/blackSugar.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Melona",
    description: "Refreshing melon glaze with a light and fruity flavor.",
    image: "/images/mochiDonuts/melona.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Strawberry Funnel",
    description:
      "A sweet and fruity strawberry glaze with a crunchy funnel cake topping.",
    image: "/images/mochiDonuts/strawberryFunnel.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Matcha",
    description: "Smooth and creamy matcha glaze with a hint of sweetness.",
    image: "/images/mochiDonuts/matcha.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Red Velvet",
    description: "Rich and velvety red velvet glaze with a hint of cocoa.",
    image: "/images/mochiDonuts/redVelvet.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Pistachio",
    description: "Nutty and aromatic pistachio glaze with a hint of almond.",
    image: "/images/mochiDonuts/pistachio.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Peanut Butter",
    description:
      "Creamy and nutty peanut butter glaze with a hint of sweetness.",
    image: "/images/mochiDonuts/peanutButter.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Original",
    description: "Classic mochi donut with a soft and chewy texture.",
    image: "/images/mochiDonuts/original.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Cookies & Cream",
    description: "Crunchy cookie bits with a creamy vanilla glaze.",
    image: "/images/mochiDonuts/cookiesCream.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Blueberry",
    description: "Sweet and tangy blueberry glaze with a hint of lemon.",
    image: "/images/mochiDonuts/blueberry.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Mango",
    description: "Sweet and tropical mango glaze with a hint of coconut.",
    image: "/images/mochiDonuts/mango.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Black Sesame",
    description: "Rich and nutty black sesame glaze with a hint of sweetness.",
    image: "/images/mochiDonuts/blackSesame.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Nutella",
    description: "Decadent Nutella glaze with a rich and creamy texture.",
    image: "/images/mochiDonuts/nutella.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
  },
  {
    name: "Cheesecake",
    description: "Rich and creamy cheesecake glaze with a hint of vanilla.",
    image: "/images/mochiDonuts/cheesecake.png",
    nutrition: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
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
  {
    name: "Potato Original",
    description: "Classic beef hot dog with crispy potatos on top.",
    image: "/images/hotdogs/potatoOriginal.png",
    nutrition: { calories: 280, fat: "18g", carbs: "22g", protein: "12g" },
  },
  {
    name: "Potato Half & Half",
    description:
      "Half beef, half mozzarella hot dog with crispy potatos on top.",
    image: "/images/hotdogs/potatoHalfHalf.png",
    nutrition: { calories: 310, fat: "20g", carbs: "24g", protein: "14g" },
  },
  {
    name: "Potato Mozzarella",
    description:
      "Hot dog with a gooey mozzarella cheese filling and crispy potatos on top.",
    image: "/images/hotdogs/potatoMozzarella.png",
    nutrition: { calories: 300, fat: "19g", carbs: "23g", protein: "13g" },
  },
  {
    name: "Cheddar Cheese",
    description: "Beef hot dog with a cheddar cheese filling.",
    image: "/images/hotdogs/cheddarCheese.png",
    nutrition: { calories: 290, fat: "18g", carbs: "22g", protein: "12g" },
  },
  {
    name: "Crispy Ramen",
    description: "Beef hot dog with crispy ramen noodles on top.",
    image: "/images/hotdogs/crispyRamen.png",
    nutrition: { calories: 300, fat: "19g", carbs: "23g", protein: "13g" },
  },
  {
    name: "Hot Cheetos Original",
    description: "Classic beef hot dog with crushed hot cheetos on top.",
    image: "/images/hotdogs/hotCheetosOriginal.png",
    nutrition: { calories: 290, fat: "18g", carbs: "22g", protein: "12g" },
  },
  {
    name: "Hot Cheetos Half & Half",
    description:
      "Half beef, half mozzarella hot dog with crushed hot cheetos on top.",
    image: "/images/hotdogs/hotCheetosHalfHalf.png",
    nutrition: { calories: 320, fat: "21g", carbs: "25g", protein: "14g" },
  },
  {
    name: "Crunch Cereal Original",
    description: "Classic beef hot dog with crunchy cereal on top.",
    image: "/images/hotdogs/crunchCerealOriginal.png",
    nutrition: { calories: 300, fat: "19g", carbs: "23g", protein: "13g" },
  },
  {
    name: "Crunch Cereal Half & Half",
    description:
      "Half beef, half mozzarella hot dog with crunchy cereal on top.",
    image: "/images/hotdogs/crunchCerealHalfHalf.png",
    nutrition: { calories: 330, fat: "22g", carbs: "26g", protein: "15g" },
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
  {
    name: "Brown Sugar",
    description:
      "Rich and caramelized brown sugar bubble tea with a hint of sweetness.",
    image: "/images/drinks/brownSugar.png",
    nutrition: { calories: 190, fat: "6g", carbs: "32g", protein: "4g" },
  },
  {
    name: "Milk Tea",
    description: "Smooth and creamy milk bubble tea with a hint of sweetness.",
    image: "/images/drinks/milkTea.png",
    nutrition: { calories: 150, fat: "3g", carbs: "25g", protein: "2g" },
  },
  {
    name: "Purple Sweet Potato Latte",
    description:
      "Rich and creamy purple sweet potato latte bubble tea with a hint of vanilla.",
    image: "/images/drinks/purpleSweetPotatoLatte.png",
    nutrition: { calories: 200, fat: "7g", carbs: "30g", protein: "4g" },
  },
  {
    name: "Coffee",
    description: "Bold and aromatic coffee bubble tea with a smooth finish.",
    image: "/images/drinks/coffee.png",
    nutrition: { calories: 180, fat: "5g", carbs: "30g", protein: "3g" },
  },
  {
    name: "Matcha",
    description:
      "Smooth and creamy matcha bubble tea with a hint of sweetness.",
    image: "/images/drinks/matcha.png",
    nutrition: { calories: 160, fat: "4g", carbs: "28g", protein: "2g" },
  },
];

const iceCream = [
  {
    name: "Vanilla",
    description: "1KG of classic vanilla ice cream with a creamy texture.",
    image: "/images/iceCream/vanilla.png",
    nutrition: { calories: 800, fat: "40g", carbs: "100g", protein: "20g" },
  },
  {
    name: "Ube",
    description:
      "1KG of rich and nutty purple yam ice cream with a hint of vanilla.",
    image: "/images/iceCream/ube.png",
    nutrition: { calories: 820, fat: "42g", carbs: "102g", protein: "22g" },
  },
  {
    name: "Choco",
    description:
      "1KG of decadent chocolate ice cream with a rich and smooth texture.",
    image: "/images/iceCream/choco.png",
    nutrition: { calories: 840, fat: "44g", carbs: "104g", protein: "24g" },
  },
  {
    name: "Matcha",
    description:
      "1KG of smooth and creamy matcha ice cream with a hint of sweetness.",
    image: "/images/iceCream/matcha.png",
    nutrition: { calories: 860, fat: "46g", carbs: "106g", protein: "26g" },
  },
  {
    name: "Original Soft Serve",
    description: "Classic vanilla ice cream with a creamy texture.",
    image: "/images/iceCream/originalSoftServe.png",
    nutrition: { calories: 200, fat: "10g", carbs: "25g", protein: "5g" },
  },
  {
    name: "Honey Butter Soft Serve",
    description: "Rich and buttery honey ice cream with a hint of sweetness.",
    image: "/images/iceCream/honeyButterSoftServe.png",
    nutrition: { calories: 220, fat: "12g", carbs: "27g", protein: "6g" },
  },
  {
    name: "Strawberry Lemon Soft Serve",
    description: "Sweet strawberry ice cream with a zesty lemon twist.",
    image: "/images/iceCream/strawberryLemonSoftServe.png",
    nutrition: { calories: 210, fat: "11g", carbs: "26g", protein: "5g" },
  },
  {
    name: "Melon Soft Serve",
    description: "Refreshing melon ice cream with a light and fruity flavor.",
    image: "/images/iceCream/melonSoftServe.png",
    nutrition: { calories: 190, fat: "9g", carbs: "24g", protein: "4g" },
  },
  {
    name: "Original Bliss",
    description: "Classic vanilla ice cream with tapioca and syrup.",
    image: "/images/iceCream/originalBliss.png",
    nutrition: { calories: 250, fat: "15g", carbs: "30g", protein: "8g" },
  },
  {
    name: "Honey Butter Bliss",
    description: "Rich and buttery honey ice cream with tapioca and syrup.",
    image: "/images/iceCream/honeyButterBliss.png",
    nutrition: { calories: 270, fat: "17g", carbs: "32g", protein: "10g" },
  },
  {
    name: "Strawberry Lemon Bliss",
    description: "Sweet strawberry ice cream with tapioca and syrup.",
    image: "/images/iceCream/strawberryLemonBliss.png",
    nutrition: { calories: 260, fat: "16g", carbs: "31g", protein: "9g" },
  },
  {
    name: "Melon Bliss",
    description: "Refreshing melon ice cream with tapioca and syrup.",
    image: "/images/iceCream/melonBliss.png",
    nutrition: { calories: 240, fat: "14g", carbs: "29g", protein: "7g" },
  },
  {
    name: "Original Delight",
    description: "Classic vanilla ice cream with mochi balls and syrup.",
    image: "/images/iceCream/originalDelight.png",
    nutrition: { calories: 300, fat: "20g", carbs: "35g", protein: "12g" },
  },
  {
    name: "Honey Butter Delight",
    description: "Rich and buttery honey ice cream with mochi balls and syrup.",
    image: "/images/iceCream/honeyButterDelight.png",
    nutrition: { calories: 320, fat: "22g", carbs: "37g", protein: "14g" },
  },
  {
    name: "Strawberry Lemon Delight",
    description: "Sweet strawberry ice cream with mochi balls and syrup.",
    image: "/images/iceCream/strawberryLemonDelight.png",
    nutrition: { calories: 310, fat: "21g", carbs: "36g", protein: "13g" },
  },
  {
    name: "Melon Delight",
    description: "Refreshing melon ice cream with mochi balls and syrup.",
    image: "/images/iceCream/melonDelight.png",
    nutrition: { calories: 290, fat: "19g", carbs: "34g", protein: "11g" },
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
    <main className="min-h-screen bg-[#333] text-white py-10 px-4 md:px-8">
      {/* Title */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Menu:
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore our delicious offerings!
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {["Mochi Donuts", "Mochi-Balls", "Hotdogs", "Drinks", "Ice Cream"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Menu Items */}
      <div
        key={activeTab}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {getMenuItems().map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#444] shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
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
              <h2 className="text-2xl font-bold text-yellow-400">
                {item.name}
              </h2>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Nutritional Info */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-[#444] text-white rounded-xl p-6 shadow-lg max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Image */}
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h2 className="text-3xl font-bold text-yellow-400">
                {selectedItem.name}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mt-2">{selectedItem.description}</p>

              {/* Nutrition Info */}
              <div className="mt-4 text-gray-200">
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

              {/* Close Button */}
              <button
                className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500"
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
