import React, { useState } from 'react';
import '../fruitsVegetables/fruitsVegetables.css';

const products = [
  // Fruits
  {
    id: 1,
    name: 'Apples',
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg',
    price: 180,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 2,
    name: 'Bananas',
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg',
    price: 60,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 3,
    name: 'Oranges',
    image: 'https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg',
    price: 120,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 4,
    name: 'Grapes',
    image: 'https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg',
    price: 160,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 5,
    name: 'Mangoes',
    image: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg',
    price: 140,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 6,
    name: 'Pomegranates',
    image: 'https://images.pexels.com/photos/1458695/pexels-photo-1458695.jpeg',
    price: 200,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 7,
    name: 'Watermelons',
    image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg',
    price: 40,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 8,
    name: 'Pineapples',
    image: 'https://images.pexels.com/photos/1458696/pexels-photo-1458696.jpeg',
    price: 80,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 9,
    name: 'Papayas',
    image: 'https://images.pexels.com/photos/1458697/pexels-photo-1458697.jpeg',
    price: 60,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 10,
    name: 'Guavas',
    image: 'https://images.pexels.com/photos/1458698/pexels-photo-1458698.jpeg',
    price: 100,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 11,
    name: 'Pears',
    image: 'https://images.pexels.com/photos/1458699/pexels-photo-1458699.jpeg',
    price: 160,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 12,
    name: 'Kiwis',
    image: 'https://images.pexels.com/photos/1458700/pexels-photo-1458700.jpeg',
    price: 240,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 13,
    name: 'Strawberries',
    image: 'https://images.pexels.com/photos/1458701/pexels-photo-1458701.jpeg',
    price: 400,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 14,
    name: 'Blueberries',
    image: 'https://images.pexels.com/photos/1458702/pexels-photo-1458702.jpeg',
    price: 600,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 15,
    name: 'Raspberries',
    image: 'https://images.pexels.com/photos/1458703/pexels-photo-1458703.jpeg',
    price: 500,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 16,
    name: 'Blackberries',
    image: 'https://images.pexels.com/photos/1458704/pexels-photo-1458704.jpeg',
    price: 450,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 17,
    name: 'Cherries',
    image: 'https://images.pexels.com/photos/1458705/pexels-photo-1458705.jpeg',
    price: 800,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 18,
    name: 'Plums',
    image: 'https://images.pexels.com/photos/1458706/pexels-photo-1458706.jpeg',
    price: 200,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 19,
    name: 'Peaches',
    image: 'https://images.pexels.com/photos/1458707/pexels-photo-1458707.jpeg',
    price: 180,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 20,
    name: 'Apricots',
    image: 'https://images.pexels.com/photos/1458708/pexels-photo-1458708.jpeg',
    price: 300,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 21,
    name: 'Figs',
    image: 'https://images.pexels.com/photos/1458709/pexels-photo-1458709.jpeg',
    price: 400,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 22,
    name: 'Dates',
    image: 'https://images.pexels.com/photos/1458710/pexels-photo-1458710.jpeg',
    price: 500,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 23,
    name: 'Cranberries',
    image: 'https://images.pexels.com/photos/1458711/pexels-photo-1458711.jpeg',
    price: 350,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 24,
    name: 'Lemons',
    image: 'https://images.pexels.com/photos/1458712/pexels-photo-1458712.jpeg',
    price: 100,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 25,
    name: 'Limes',
    image: 'https://images.pexels.com/photos/1458713/pexels-photo-1458713.jpeg',
    price: 120,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  // Vegetables
  {
    id: 26,
    name: 'Tomatoes',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
    price: 40,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 27,
    name: 'Potatoes',
    image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg',
    price: 35,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 28,
    name: 'Onions',
    image: 'https://images.pexels.com/photos/1449305/pexels-photo-1449305.jpeg',
    price: 45,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 29,
    name: 'Carrots',
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    price: 50,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 30,
    name: 'Cucumbers',
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg',
    price: 40,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 31,
    name: 'Bell Peppers',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
    price: 120,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 32,
    name: 'Cauliflower',
    image: 'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg',
    price: 60,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 33,
    name: 'Broccoli',
    image: 'https://images.pexels.com/photos/1199563/pexels-photo-1199563.jpeg',
    price: 80,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 34,
    name: 'Spinach',
    image: 'https://images.pexels.com/photos/1199564/pexels-photo-1199564.jpeg',
    price: 60,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 35,
    name: 'Lettuce',
    image: 'https://images.pexels.com/photos/1199565/pexels-photo-1199565.jpeg',
    price: 40,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 36,
    name: 'Cabbage',
    image: 'https://images.pexels.com/photos/1199566/pexels-photo-1199566.jpeg',
    price: 30,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 37,
    name: 'Green Beans',
    image: 'https://images.pexels.com/photos/1199567/pexels-photo-1199567.jpeg',
    price: 80,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 38,
    name: 'Peas',
    image: 'https://images.pexels.com/photos/1199568/pexels-photo-1199568.jpeg',
    price: 100,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 39,
    name: 'Corn',
    image: 'https://images.pexels.com/photos/1199569/pexels-photo-1199569.jpeg',
    price: 40,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 40,
    name: 'Eggplant',
    image: 'https://images.pexels.com/photos/1199570/pexels-photo-1199570.jpeg',
    price: 60,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 41,
    name: 'Zucchini',
    image: 'https://images.pexels.com/photos/1199571/pexels-photo-1199571.jpeg',
    price: 80,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 42,
    name: 'Sweet Potatoes',
    image: 'https://images.pexels.com/photos/1199572/pexels-photo-1199572.jpeg',
    price: 50,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 43,
    name: 'Ginger',
    image: 'https://images.pexels.com/photos/1199573/pexels-photo-1199573.jpeg',
    price: 200,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 44,
    name: 'Garlic',
    image: 'https://images.pexels.com/photos/1199574/pexels-photo-1199574.jpeg',
    price: 180,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 45,
    name: 'Mushrooms',
    image: 'https://images.pexels.com/photos/1199575/pexels-photo-1199575.jpeg',
    price: 300,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 46,
    name: 'Asparagus',
    image: 'https://images.pexels.com/photos/1199576/pexels-photo-1199576.jpeg',
    price: 400,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 47,
    name: 'Artichokes',
    image: 'https://images.pexels.com/photos/1199577/pexels-photo-1199577.jpeg',
    price: 350,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 48,
    name: 'Brussels Sprouts',
    image: 'https://images.pexels.com/photos/1199578/pexels-photo-1199578.jpeg',
    price: 200,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 49,
    name: 'Kale',
    image: 'https://images.pexels.com/photos/1199579/pexels-photo-1199579.jpeg',
    price: 120,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 50,
    name: 'Radishes',
    image: 'https://images.pexels.com/photos/1199580/pexels-photo-1199580.jpeg',
    price: 60,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  },
  {
    id: 51,
    name: 'Dragon Fruit',
    image: 'https://images.pexels.com/photos/1458714/pexels-photo-1458714.jpeg',
    price: 450,
    minQuantity: 5,
    unit: 'kg',
    category: 'Fruits'
  },
  {
    id: 52,
    name: 'Bok Choy',
    image: 'https://images.pexels.com/photos/1199581/pexels-photo-1199581.jpeg',
    price: 180,
    minQuantity: 5,
    unit: 'kg',
    category: 'Vegetables'
  }
];

const FruitsVegetables = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => {
      const currentQty = prev[productId] || 5; // Default to minimum quantity
      const newQty = Math.max(5, currentQty + change); // Ensure minimum quantity of 5
      return { ...prev, [productId]: newQty };
    });
  };

  const calculateTotal = (productId) => {
    const product = products.find(p => p.id === productId);
    const quantity = quantities[productId] || 5;
    return product.price * quantity;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Fruits & Vegetables</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                {product.category}
              </span>
          </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">Min. Order: {product.minQuantity} {product.unit}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">
                  ₹{product.price}/{product.unit}
          </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleQuantityChange(product.id, -1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded"
                  >
                    -
            </button>
                  <span className="text-lg font-semibold">
                    {quantities[product.id] || 5} {product.unit}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(product.id, 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded"
                  >
                    +
            </button>
          </div>
        </div>
              
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">
                  Total: ₹{calculateTotal(product.id)}
          </div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
            </button>
          </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitsVegetables;
