import React, { useState } from 'react';
import '../dairyBread/dairyBread.css';

const products = [
  // Dairy Products
  {
    id: 1,
    name: 'Milk',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
    price: 60,
    minQuantity: 1,
    unit: 'liter',
    category: 'Dairy'
  },
  {
    id: 2,
    name: 'Curd',
    image: 'https://images.pexels.com/photos/1458690/pexels-photo-1458690.jpeg',
    price: 80,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 3,
    name: 'Butter',
    image: 'https://images.pexels.com/photos/1458691/pexels-photo-1458691.jpeg',
    price: 600,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 4,
    name: 'Cheese',
    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    price: 800,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 5,
    name: 'Paneer',
    image: 'https://images.pexels.com/photos/1458692/pexels-photo-1458692.jpeg',
    price: 400,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 6,
    name: 'Cream',
    image: 'https://images.pexels.com/photos/1458693/pexels-photo-1458693.jpeg',
    price: 200,
    minQuantity: 1,
    unit: 'liter',
    category: 'Dairy'
  },
  {
    id: 7,
    name: 'Ghee',
    image: 'https://images.pexels.com/photos/1458715/pexels-photo-1458715.jpeg',
    price: 900,
    minQuantity: 1,
    unit: 'liter',
    category: 'Dairy'
  },
  {
    id: 8,
    name: 'Ice Cream',
    image: 'https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg',
    price: 300,
    minQuantity: 1,
    unit: 'liter',
    category: 'Dairy'
  },
  {
    id: 9,
    name: 'Yogurt',
    image: 'https://images.pexels.com/photos/1458716/pexels-photo-1458716.jpeg',
    price: 100,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 10,
    name: 'Condensed Milk',
    image: 'https://images.pexels.com/photos/1458717/pexels-photo-1458717.jpeg',
    price: 120,
    minQuantity: 1,
    unit: 'can',
    category: 'Dairy'
  },
  {
    id: 11,
    name: 'Milk Powder',
    image: 'https://images.pexels.com/photos/1458718/pexels-photo-1458718.jpeg',
    price: 500,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 12,
    name: 'Cottage Cheese',
    image: 'https://images.pexels.com/photos/1458719/pexels-photo-1458719.jpeg',
    price: 350,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 13,
    name: 'Sour Cream',
    image: 'https://images.pexels.com/photos/1458720/pexels-photo-1458720.jpeg',
    price: 250,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 14,
    name: 'Whipped Cream',
    image: 'https://images.pexels.com/photos/1458721/pexels-photo-1458721.jpeg',
    price: 280,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 15,
    name: 'Mozzarella',
    image: 'https://images.pexels.com/photos/1458722/pexels-photo-1458722.jpeg',
    price: 700,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  // Bread Products
  {
    id: 16,
    name: 'White Bread',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    price: 40,
    minQuantity: 1,
    unit: 'loaf',
    category: 'Bread'
  },
  {
    id: 17,
    name: 'Brown Bread',
    image: 'https://images.pexels.com/photos/1775044/pexels-photo-1775044.jpeg',
    price: 50,
    minQuantity: 1,
    unit: 'loaf',
    category: 'Bread'
  },
  {
    id: 18,
    name: 'Multigrain Bread',
    image: 'https://images.pexels.com/photos/1775045/pexels-photo-1775045.jpeg',
    price: 60,
    minQuantity: 1,
    unit: 'loaf',
    category: 'Bread'
  },
  {
    id: 19,
    name: 'Garlic Bread',
    image: 'https://images.pexels.com/photos/1775046/pexels-photo-1775046.jpeg',
    price: 80,
    minQuantity: 1,
    unit: 'pack',
    category: 'Bread'
  },
  {
    id: 20,
    name: 'Baguette',
    image: 'https://images.pexels.com/photos/1775047/pexels-photo-1775047.jpeg',
    price: 70,
    minQuantity: 1,
    unit: 'piece',
    category: 'Bread'
  },
  {
    id: 21,
    name: 'Croissant',
    image: 'https://images.pexels.com/photos/1775048/pexels-photo-1775048.jpeg',
    price: 30,
    minQuantity: 1,
    unit: 'piece',
    category: 'Bread'
  },
  {
    id: 22,
    name: 'Bun',
    image: 'https://images.pexels.com/photos/1775049/pexels-photo-1775049.jpeg',
    price: 20,
    minQuantity: 1,
    unit: 'piece',
    category: 'Bread'
  },
  {
    id: 23,
    name: 'Pav',
    image: 'https://images.pexels.com/photos/1775050/pexels-photo-1775050.jpeg',
    price: 25,
    minQuantity: 1,
    unit: 'pack',
    category: 'Bread'
  },
  {
    id: 24,
    name: 'Breadsticks',
    image: 'https://images.pexels.com/photos/1775051/pexels-photo-1775051.jpeg',
    price: 90,
    minQuantity: 1,
    unit: 'pack',
    category: 'Bread'
  },
  {
    id: 25,
    name: 'Pita Bread',
    image: 'https://images.pexels.com/photos/1775052/pexels-photo-1775052.jpeg',
    price: 100,
    minQuantity: 1,
    unit: 'pack',
    category: 'Bread'
  },
  {
    id: 26,
    name: 'Ricotta Cheese',
    image: 'https://images.pexels.com/photos/1458723/pexels-photo-1458723.jpeg',
    price: 450,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 27,
    name: 'Mascarpone',
    image: 'https://images.pexels.com/photos/1458724/pexels-photo-1458724.jpeg',
    price: 550,
    minQuantity: 1,
    unit: 'kg',
    category: 'Dairy'
  },
  {
    id: 28,
    name: 'Focaccia',
    image: 'https://images.pexels.com/photos/1775053/pexels-photo-1775053.jpeg',
    price: 120,
    minQuantity: 1,
    unit: 'piece',
    category: 'Bread'
  }
];

const DairyBread = () => {
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
      <h1 className="text-4xl font-bold text-center mb-8">Dairy & Bread</h1>
      
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

export default DairyBread;
