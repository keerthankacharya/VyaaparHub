import React, { useState } from 'react';
import '../provisionalItems/provisionalItems.css';

const products = [
  // Spices
  {
    id: 1,
    name: 'Turmeric Powder',
    image: 'https://images.pexels.com/photos/1458753/pexels-photo-1458753.jpeg',
    price: 120,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 2,
    name: 'Red Chilli Powder',
    image: 'https://images.pexels.com/photos/1458754/pexels-photo-1458754.jpeg',
    price: 200,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 3,
    name: 'Coriander Powder',
    image: 'https://images.pexels.com/photos/1458755/pexels-photo-1458755.jpeg',
    price: 180,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 4,
    name: 'Garam Masala',
    image: 'https://images.pexels.com/photos/1458756/pexels-photo-1458756.jpeg',
    price: 400,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 5,
    name: 'Cumin Seeds',
    image: 'https://images.pexels.com/photos/1458757/pexels-photo-1458757.jpeg',
    price: 300,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 6,
    name: 'Black Pepper',
    image: 'https://images.pexels.com/photos/1458758/pexels-photo-1458758.jpeg',
    price: 500,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 7,
    name: 'Cardamom',
    image: 'https://images.pexels.com/photos/1458759/pexels-photo-1458759.jpeg',
    price: 1200,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 8,
    name: 'Cinnamon',
    image: 'https://images.pexels.com/photos/1458760/pexels-photo-1458760.jpeg',
    price: 800,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 9,
    name: 'Cloves',
    image: 'https://images.pexels.com/photos/1458761/pexels-photo-1458761.jpeg',
    price: 900,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 10,
    name: 'Bay Leaves',
    image: 'https://images.pexels.com/photos/1458762/pexels-photo-1458762.jpeg',
    price: 400,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  // Rice & Grains
  {
    id: 11,
    name: 'Basmati Rice',
    image: 'https://images.pexels.com/photos/1458763/pexels-photo-1458763.jpeg',
    price: 120,
    minQuantity: 5,
    unit: 'kg',
    category: 'Grains'
  },
  {
    id: 12,
    name: 'Sona Masoori Rice',
    image: 'https://images.pexels.com/photos/1458764/pexels-photo-1458764.jpeg',
    price: 100,
    minQuantity: 5,
    unit: 'kg',
    category: 'Grains'
  },
  {
    id: 13,
    name: 'Wheat',
    image: 'https://images.pexels.com/photos/1458765/pexels-photo-1458765.jpeg',
    price: 80,
    minQuantity: 5,
    unit: 'kg',
    category: 'Grains'
  },
  {
    id: 14,
    name: 'Ragi',
    image: 'https://images.pexels.com/photos/1458766/pexels-photo-1458766.jpeg',
    price: 90,
    minQuantity: 5,
    unit: 'kg',
    category: 'Grains'
  },
  {
    id: 15,
    name: 'Jowar',
    image: 'https://images.pexels.com/photos/1458767/pexels-photo-1458767.jpeg',
    price: 85,
    minQuantity: 5,
    unit: 'kg',
    category: 'Grains'
  },
  // Pulses
  {
    id: 16,
    name: 'Toor Dal',
    image: 'https://images.pexels.com/photos/1458768/pexels-photo-1458768.jpeg',
    price: 140,
    minQuantity: 5,
    unit: 'kg',
    category: 'Pulses'
  },
  {
    id: 17,
    name: 'Moong Dal',
    image: 'https://images.pexels.com/photos/1458769/pexels-photo-1458769.jpeg',
    price: 160,
    minQuantity: 5,
    unit: 'kg',
    category: 'Pulses'
  },
  {
    id: 18,
    name: 'Urad Dal',
    image: 'https://images.pexels.com/photos/1458770/pexels-photo-1458770.jpeg',
    price: 150,
    minQuantity: 5,
    unit: 'kg',
    category: 'Pulses'
  },
  {
    id: 19,
    name: 'Chana Dal',
    image: 'https://images.pexels.com/photos/1458771/pexels-photo-1458771.jpeg',
    price: 130,
    minQuantity: 5,
    unit: 'kg',
    category: 'Pulses'
  },
  {
    id: 20,
    name: 'Masoor Dal',
    image: 'https://images.pexels.com/photos/1458772/pexels-photo-1458772.jpeg',
    price: 120,
    minQuantity: 5,
    unit: 'kg',
    category: 'Pulses'
  },
  // Other Essentials
  {
    id: 21,
    name: 'Sugar',
    image: 'https://images.pexels.com/photos/1458773/pexels-photo-1458773.jpeg',
    price: 50,
    minQuantity: 5,
    unit: 'kg',
    category: 'Essentials'
  },
  {
    id: 22,
    name: 'Salt',
    image: 'https://images.pexels.com/photos/1458774/pexels-photo-1458774.jpeg',
    price: 20,
    minQuantity: 5,
    unit: 'kg',
    category: 'Essentials'
  },
  {
    id: 23,
    name: 'Cooking Oil',
    image: 'https://images.pexels.com/photos/1458775/pexels-photo-1458775.jpeg',
    price: 180,
    minQuantity: 5,
    unit: 'liter',
    category: 'Essentials'
  },
  {
    id: 24,
    name: 'Ghee',
    image: 'https://images.pexels.com/photos/1458776/pexels-photo-1458776.jpeg',
    price: 900,
    minQuantity: 1,
    unit: 'liter',
    category: 'Essentials'
  },
  {
    id: 25,
    name: 'Vinegar',
    image: 'https://images.pexels.com/photos/1458777/pexels-photo-1458777.jpeg',
    price: 100,
    minQuantity: 1,
    unit: 'liter',
    category: 'Essentials'
  },
  {
    id: 26,
    name: 'Mustard Seeds',
    image: 'https://images.pexels.com/photos/1458778/pexels-photo-1458778.jpeg',
    price: 250,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 27,
    name: 'Fenugreek Seeds',
    image: 'https://images.pexels.com/photos/1458779/pexels-photo-1458779.jpeg',
    price: 200,
    minQuantity: 1,
    unit: 'kg',
    category: 'Spices'
  },
  {
    id: 28,
    name: 'Soyabean',
    image: 'https://images.pexels.com/photos/1458780/pexels-photo-1458780.jpeg',
    price: 110,
    minQuantity: 5,
    unit: 'kg',
    category: 'Pulses'
  }
];

const ProvisionalItems = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => {
      const currentQty = prev[productId] || products.find(p => p.id === productId).minQuantity;
      const newQty = Math.max(products.find(p => p.id === productId).minQuantity, currentQty + change);
      return { ...prev, [productId]: newQty };
    });
  };

  const calculateTotal = (productId) => {
    const product = products.find(p => p.id === productId);
    const quantity = quantities[productId] || product.minQuantity;
    return product.price * quantity;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Provisional Items</h1>
      
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
                    {quantities[product.id] || product.minQuantity} {product.unit}
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

export default ProvisionalItems;
