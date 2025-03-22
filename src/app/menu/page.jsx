"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";


const generateNutrition = (type) => {
  const nutritionProfiles = {
    mochiDonut: { calories: 250, fat: "10g", carbs: "35g", protein: "3g" },
    mochiBall: { calories: 180, fat: "5g", carbs: "28g", protein: "3g" },
    hotdog: { calories: 280, fat: "18g", carbs: "22g", protein: "12g" },
    drink: { calories: 170, fat: "4g", carbs: "29g", protein: "3g" },
    iceCream: { calories: 250, fat: "15g", carbs: "30g", protein: "8g" }
  };
  
  return nutritionProfiles[type] || nutritionProfiles.mochiDonut;
};

const createMenuItem = (name, description, image, type) => ({
  name,
  description,
  image,
  nutrition: generateNutrition(type)
});

// Menu data organized by category
const menuCategories = {
  "Mochi Donuts": [
    ["Strawberry", "A sweet and fruity delight with a fresh strawberry glaze.", "/images/mochiDonuts/strawberry.png"],
    ["Yuzu", "Zesty citrus flavor with a tangy twist.", "/images/mochiDonuts/yuzu.png"],
    ["Yogurt", "Smooth and creamy with a light, tangy yogurt glaze.", "/images/mochiDonuts/yogurt.png"],
    ["Ube", "A rich and nutty purple yam flavor with a hint of vanilla.", "/images/mochiDonuts/ube.png"],
    ["Taro", "Earthy and subtly sweet taro glaze with a creamy texture.", "/images/mochiDonuts/taro.png"],
    ["Milk Pebble", "A sweet and milky glaze with a crunchy cereal topping.", "/images/mochiDonuts/milkPebble.png"],
    ["Churro", "A cinnamon-sugar-coated mochi donut with a hint of vanilla.", "/images/mochiDonuts/churro.png"],
    ["Coffee", "Bold and aromatic coffee glaze with a smooth finish.", "/images/mochiDonuts/coffee.png"],
    ["Ube Original", "Classic ube flavor with a rich, creamy purple yam glaze.", "/images/mochiDonuts/ubeOriginal.png"],
    ["Chocolate", "Decadent chocolate glaze with a rich and smooth texture.", "/images/mochiDonuts/chocolate.png"],
    ["Banana Milk", "Sweet and creamy banana milk glaze with a hint of vanilla.", "/images/mochiDonuts/bananaMilk.png"],
    ["Black Sugar", "Rich and caramelized black sugar glaze with a hint of sweetness.", "/images/mochiDonuts/blackSugar.png"],
    ["Melona", "Refreshing melon glaze with a light and fruity flavor.", "/images/mochiDonuts/melona.png"],
    ["Strawberry Funnel", "A sweet and fruity strawberry glaze with a crunchy funnel cake topping.", "/images/mochiDonuts/strawberryFunnel.png"],
    ["Matcha", "Smooth and creamy matcha glaze with a hint of sweetness.", "/images/mochiDonuts/matcha.png"],
    ["Red Velvet", "Rich and velvety red velvet glaze with a hint of cocoa.", "/images/mochiDonuts/redVelvet.png"],
    ["Pistachio", "Nutty and aromatic pistachio glaze with a hint of almond.", "/images/mochiDonuts/pistachio.png"],
    ["Peanut Butter", "Creamy and nutty peanut butter glaze with a hint of sweetness.", "/images/mochiDonuts/peanutButter.png"],
    ["Original", "Classic mochi donut with a soft and chewy texture.", "/images/mochiDonuts/original.png"],
    ["Cookies & Cream", "Crunchy cookie bits with a creamy vanilla glaze.", "/images/mochiDonuts/cookiesCream.png"],
    ["Blueberry", "Sweet and tangy blueberry glaze with a hint of lemon.", "/images/mochiDonuts/blueberry.png"],
    ["Mango", "Sweet and tropical mango glaze with a hint of coconut.", "/images/mochiDonuts/mango.png"],
    ["Black Sesame", "Rich and nutty black sesame glaze with a hint of sweetness.", "/images/mochiDonuts/blackSesame.png"],
    ["Nutella", "Decadent Nutella glaze with a rich and creamy texture.", "/images/mochiDonuts/nutella.png"],
    ["Cheesecake", "Rich and creamy cheesecake glaze with a hint of vanilla.", "/images/mochiDonuts/cheesecake.png"]
  ],
  "Mochi-Balls": [
    ["Original", "Classic mochi balls with a soft and chewy texture.", "/images/mochiBalls/original.png"],
    ["Cookies & Cream", "Crunchy cookie bits with a creamy vanilla filling.", "/images/mochiBalls/cookiesCream.png"],
    ["Creme Brulee", "Rich and creamy custard with a caramelized sugar topping.", "/images/mochiBalls/cremeBrulee.png"],
    ["Coffee", "Bold and aromatic coffee glaze with a smooth finish.", "/images/mochiBalls/coffee.png"],
    ["Matcha", "Smooth and creamy matcha with a hint of sweetness.", "/images/mochiBalls/matcha.png"],
    ["Strawberry", "Sweet and fruity strawberry filling with a hint of tartness.", "/images/mochiBalls/strawberry.png"]
  ],
  "Hotdogs": [
    ["Original", "Classic beef hot dog with ketchup and mustard.", "/images/hotdogs/original.png"],
    ["Half & Half", "Half beef, half mozzarella hot dog with a blend of spices.", "/images/hotdogs/halfHalf.png"],
    ["Mozzarella", "Hot dog with a gooey mozzarella cheese filling.", "/images/hotdogs/mozzarella.png"],
    ["Potato Original", "Classic beef hot dog with crispy potatos on top.", "/images/hotdogs/potatoOriginal.png"],
    ["Potato Half & Half", "Half beef, half mozzarella hot dog with crispy potatos on top.", "/images/hotdogs/potatoHalfHalf.png"],
    ["Potato Mozzarella", "Hot dog with a gooey mozzarella cheese filling and crispy potatos on top.", "/images/hotdogs/potatoMozzarella.png"],
    ["Cheddar Cheese", "Beef hot dog with a cheddar cheese filling.", "/images/hotdogs/cheddarCheese.png"],
    ["Crispy Ramen", "Beef hot dog with crispy ramen noodles on top.", "/images/hotdogs/crispyRamen.png"],
    ["Hot Cheetos Original", "Classic beef hot dog with crushed hot cheetos on top.", "/images/hotdogs/hotCheetosOriginal.png"],
    ["Hot Cheetos Half & Half", "Half beef, half mozzarella hot dog with crushed hot cheetos on top.", "/images/hotdogs/hotCheetosHalfHalf.png"],
    ["Crunch Cereal Original", "Classic beef hot dog with crunchy cereal on top.", "/images/hotdogs/crunchCerealOriginal.png"],
    ["Crunch Cereal Half & Half", "Half beef, half mozzarella hot dog with crunchy cereal on top.", "/images/hotdogs/crunchCerealHalfHalf.png"]
  ],
  "Drinks": [
    ["Peach Mango", "Sweet and tangy peach mango bubble tea.", "/images/drinks/peachMango.png"],
    ["Grapefruit Orange", "Refreshing grapefruit orange bubble tea with a citrus twist.", "/images/drinks/grapefruitOrange.png"],
    ["Cherry Berry", "Sweet and tart cherry berry bubble tea with a fruity flavor.", "/images/drinks/cherryBerry.png"],
    ["Brown Sugar", "Rich and caramelized brown sugar bubble tea with a hint of sweetness.", "/images/drinks/brownSugar.png"],
    ["Milk Tea", "Smooth and creamy milk bubble tea with a hint of sweetness.", "/images/drinks/milkTea.png"],
    ["Purple Sweet Potato Latte", "Rich and creamy purple sweet potato latte bubble tea with a hint of vanilla.", "/images/drinks/purpleSweetPotatoLatte.png"],
    ["Coffee", "Bold and aromatic coffee bubble tea with a smooth finish.", "/images/drinks/coffee.png"],
    ["Matcha", "Smooth and creamy matcha bubble tea with a hint of sweetness.", "/images/drinks/matcha.png"]
  ],
  "Ice Cream": [
    ["Vanilla", "1KG of classic vanilla ice cream with a creamy texture.", "/images/iceCream/vanilla.png"],
    ["Ube", "1KG of rich and nutty purple yam ice cream with a hint of vanilla.", "/images/iceCream/ube.png"],
    ["Choco", "1KG of decadent chocolate ice cream with a rich and smooth texture.", "/images/iceCream/choco.png"],
    ["Matcha", "1KG of smooth and creamy matcha ice cream with a hint of sweetness.", "/images/iceCream/matcha.png"],
    ["Original Soft Serve", "Classic vanilla ice cream with a creamy texture.", "/images/iceCream/originalSoftServe.png"],
    ["Honey Butter Soft Serve", "Rich and buttery honey ice cream with a hint of sweetness.", "/images/iceCream/honeyButterSoftServe.png"],
    ["Strawberry Lemon Soft Serve", "Sweet strawberry ice cream with a zesty lemon twist.", "/images/iceCream/strawberryLemonSoftServe.png"],
    ["Melon Soft Serve", "Refreshing melon ice cream with a light and fruity flavor.", "/images/iceCream/melonSoftServe.png"],
    ["Original Bliss", "Classic vanilla ice cream with tapioca and syrup.", "/images/iceCream/originalBliss.png"],
    ["Honey Butter Bliss", "Rich and buttery honey ice cream with tapioca and syrup.", "/images/iceCream/honeyButterBliss.png"],
    ["Strawberry Lemon Bliss", "Sweet strawberry ice cream with tapioca and syrup.", "/images/iceCream/strawberryLemonBliss.png"],
    ["Melon Bliss", "Refreshing melon ice cream with tapioca and syrup.", "/images/iceCream/melonBliss.png"],
    ["Original Delight", "Classic vanilla ice cream with mochi balls and syrup.", "/images/iceCream/originalDelight.png"],
    ["Honey Butter Delight", "Rich and buttery honey ice cream with mochi balls and syrup.", "/images/iceCream/honeyButterDelight.png"],
    ["Strawberry Lemon Delight", "Sweet strawberry ice cream with mochi balls and syrup.", "/images/iceCream/strawberryLemonDelight.png"],
    ["Melon Delight", "Refreshing melon ice cream with mochi balls and syrup.", "/images/iceCream/melonDelight.png"]
  ]
};

  // Processes the data into objects
const processMenuData = () => {
  const processedMenu = {};
  
  Object.entries(menuCategories).forEach(([category, items]) => {
    const itemType = category === "Mochi Donuts" ? "mochiDonut" : 
                    category === "Mochi-Balls" ? "mochiBall" :
                    category === "Hotdogs" ? "hotdog" :
                    category === "Drinks" ? "drink" : "iceCream";
                    
    processedMenu[category] = items.map(([name, description, image]) => 
      createMenuItem(name, description, image, itemType)
    );
  });
  
  return processedMenu;
};

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("Mochi Donuts");
  const [menuItems, setMenuItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    setMenuItems(processMenuData());
    setIsLoading(false);
  }, []);

  const getMenuItems = () => {
    return menuItems[activeTab] || [];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <title>MochiNut Menu</title>
    </Head>
    
    <main className="min-h-screen bg-[#333] text-white py-6 md:py-10 px-4 md:px-8 overflow-x-hidden">
      {/* Title */}
      <div className="text-center mb-8 md:mb-12 pt-6 md:pt-10 flex justify-center items-baseline">
        <motion.span
          className="text-3xl md:text-6xl font-bold text-white mr-2"
          initial={{ opacity: 0, y: -23 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our
        </motion.span>
        <motion.span
          className="text-3xl md:text-6xl font-bold text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Menu:
        </motion.span>
      </div>
      <motion.p
        className="text-lg md:text-xl text-gray-300 mt-2 md:mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Explore our delicious offerings!
      </motion.p>


        <div className="mb-6 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex space-x-2 md:space-x-4 md:justify-center">
            {Object.keys(menuCategories).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 rounded-full font-semibold transition whitespace-nowrap text-sm md:text-base ${
                  activeTab === tab
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-300">Loading menu...</p>
          </div>
        ) : (
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {getMenuItems().map((item, index) => (
              <motion.div
                key={item.name}
                className="bg-[#444] shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative w-full h-40 md:h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl md:text-2xl font-bold text-yellow-400">
                    {item.name}
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Modal for Nutritional Info*/}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="bg-[#444] text-white rounded-xl p-4 md:p-6 shadow-lg w-full max-w-sm text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-contain p-2 rounded-lg"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  {selectedItem.name}
                </h2>

                <p className="text-gray-300 mt-2">{selectedItem.description}</p>

                <div className="mt-4 text-gray-200 grid grid-cols-2 gap-2">
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
                  className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 w-full md:w-auto"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}