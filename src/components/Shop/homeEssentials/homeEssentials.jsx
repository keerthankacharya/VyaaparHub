import React, { useState } from 'react';
import '../homeEssentials/homeEssentials.css';

const products = [
  // Cleaning Products
  {
    id: 1,
    name: 'Floor Cleaner',
    image: 'https://images.pexels.com/photos/1458725/pexels-photo-1458725.jpeg',
    price: 250,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 2,
    name: 'Bathroom Cleaner',
    image: 'https://images.pexels.com/photos/1458726/pexels-photo-1458726.jpeg',
    price: 200,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 3,
    name: 'Glass Cleaner',
    image: 'https://images.pexels.com/photos/1458727/pexels-photo-1458727.jpeg',
    price: 180,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 4,
    name: 'Dish Soap',
    image: 'https://images.pexels.com/photos/1458728/pexels-photo-1458728.jpeg',
    price: 120,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 5,
    name: 'Laundry Detergent',
    image: 'https://images.pexels.com/photos/1458729/pexels-photo-1458729.jpeg',
    price: 400,
    minQuantity: 1,
    unit: 'pack',
    category: 'Cleaning'
  },
  {
    id: 6,
    name: 'Fabric Softener',
    image: 'https://images.pexels.com/photos/1458730/pexels-photo-1458730.jpeg',
    price: 350,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 7,
    name: 'All-Purpose Cleaner',
    image: 'https://images.pexels.com/photos/1458731/pexels-photo-1458731.jpeg',
    price: 220,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 8,
    name: 'Toilet Cleaner',
    image: 'https://images.pexels.com/photos/1458732/pexels-photo-1458732.jpeg',
    price: 150,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 9,
    name: 'Dishwasher Detergent',
    image: 'https://images.pexels.com/photos/1458733/pexels-photo-1458733.jpeg',
    price: 300,
    minQuantity: 1,
    unit: 'pack',
    category: 'Cleaning'
  },
  {
    id: 10,
    name: 'Carpet Cleaner',
    image: 'https://images.pexels.com/photos/1458734/pexels-photo-1458734.jpeg',
    price: 450,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  // Toiletry Items
  {
    id: 11,
    name: 'Toothpaste',
    image: 'https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg',
    price: 120,
    minQuantity: 1,
    unit: 'tube',
    category: 'Toiletry'
  },
  {
    id: 12,
    name: 'Toothbrush',
    image: 'https://images.pexels.com/photos/1458736/pexels-photo-1458736.jpeg',
    price: 80,
    minQuantity: 1,
    unit: 'piece',
    category: 'Toiletry'
  },
  {
    id: 13,
    name: 'Shampoo',
    image: 'https://images.pexels.com/photos/1458737/pexels-photo-1458737.jpeg',
    price: 250,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 14,
    name: 'Conditioner',
    image: 'https://images.pexels.com/photos/1458738/pexels-photo-1458738.jpeg',
    price: 280,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 15,
    name: 'Body Wash',
    image: 'https://images.pexels.com/photos/1458739/pexels-photo-1458739.jpeg',
    price: 200,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 16,
    name: 'Hand Soap',
    image: 'https://images.pexels.com/photos/1458740/pexels-photo-1458740.jpeg',
    price: 150,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 17,
    name: 'Deodorant',
    image: 'https://images.pexels.com/photos/1458741/pexels-photo-1458741.jpeg',
    price: 180,
    minQuantity: 1,
    unit: 'piece',
    category: 'Toiletry'
  },
  {
    id: 18,
    name: 'Mouthwash',
    image: 'https://images.pexels.com/photos/1458742/pexels-photo-1458742.jpeg',
    price: 220,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 19,
    name: 'Dental Floss',
    image: 'https://images.pexels.com/photos/1458743/pexels-photo-1458743.jpeg',
    price: 100,
    minQuantity: 1,
    unit: 'pack',
    category: 'Toiletry'
  },
  {
    id: 20,
    name: 'Hand Sanitizer',
    image: 'https://images.pexels.com/photos/1458744/pexels-photo-1458744.jpeg',
    price: 120,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 21,
    name: 'Face Wash',
    image: 'https://images.pexels.com/photos/1458745/pexels-photo-1458745.jpeg',
    price: 300,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 22,
    name: 'Moisturizer',
    image: 'https://images.pexels.com/photos/1458746/pexels-photo-1458746.jpeg',
    price: 350,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 23,
    name: 'Sunscreen',
    image: 'https://images.pexels.com/photos/1458747/pexels-photo-1458747.jpeg',
    price: 400,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Toiletry'
  },
  {
    id: 24,
    name: 'Lip Balm',
    image: 'https://images.pexels.com/photos/1458748/pexels-photo-1458748.jpeg',
    price: 80,
    minQuantity: 1,
    unit: 'piece',
    category: 'Toiletry'
  },
  {
    id: 25,
    name: 'Cotton Swabs',
    image: 'https://images.pexels.com/photos/1458749/pexels-photo-1458749.jpeg',
    price: 60,
    minQuantity: 1,
    unit: 'pack',
    category: 'Toiletry'
  },
  {
    id: 26,
    name: 'Air Freshener',
    image: 'https://images.pexels.com/photos/1458750/pexels-photo-1458750.jpeg',
    price: 180,
    minQuantity: 1,
    unit: 'bottle',
    category: 'Cleaning'
  },
  {
    id: 27,
    name: 'Shaving Cream',
    image: 'https://images.pexels.com/photos/1458751/pexels-photo-1458751.jpeg',
    price: 150,
    minQuantity: 1,
    unit: 'can',
    category: 'Toiletry'
  },
  {
    id: 28,
    name: 'Bathroom Tissue',
    image: 'https://images.pexels.com/photos/1458752/pexels-photo-1458752.jpeg',
    price: 200,
    minQuantity: 1,
    unit: 'pack',
    category: 'Toiletry'
  }
];

const HomeEssentials = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, change) => {
    setQuantities(prev => {
      const currentQty = prev[productId] || 1; // Default to minimum quantity
      const newQty = Math.max(1, currentQty + change); // Ensure minimum quantity of 1
      return { ...prev, [productId]: newQty };
    });
  };

  const calculateTotal = (productId) => {
    const product = products.find(p => p.id === productId);
    const quantity = quantities[productId] || 1;
    return product.price * quantity;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Home Essentials</h1>
      
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
                    {quantities[product.id] || 1} {product.unit}
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

export default HomeEssentials;
