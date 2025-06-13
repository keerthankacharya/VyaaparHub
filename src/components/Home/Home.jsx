import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with India's Leading B2B Platform
              </h1>
              <p className="mt-6 text-xl text-gray-100">
                Connect with thousands of verified suppliers and buyers. Grow your business with our secure and efficient trading platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 transition duration-150"
                >
                  Start Selling
                </Link>
                <Link
                  to="/browse"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-green-700 transition duration-150"
                >
                  Browse Products
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg"
                alt="B2B Platform"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Fruits & Vegetables', icon: '🥬', count: '1.2k+ Products', link: '/fruitsVegetables' },
              { name: 'Diary & Bread', icon: '🥖', count: '2.5k+ Products', link: '/dairyBread' },
              { name: 'Provisonal Items', icon: '🛒', count: '800+ Products', link: '/provisionalItems' },
              { name: 'Home Essentials', icon: '🏠', count: '1.5k+ Products', link: '/homeEssentials' },
            ].map((category) => (
              <div key={category.name} className="group relative bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
                <Link to={category.link} className="absolute inset-0"></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={`https://source.unsplash.com/random/400x400?product=${product}`}
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Premium Product {product}</h3>
                  <p className="mt-1 text-sm text-gray-500">Starting from ₹999</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-600 font-semibold">Min. Order: 10</span>
                    <button className="text-green-600 hover:text-green-700 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Vyaapar Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Suppliers',
                description: 'All our suppliers are thoroughly verified for quality and reliability.',
                icon: '✓'
              },
              {
                title: 'Secure Payments',
                description: 'Multiple payment options with 100% secure transactions.',
                icon: '🔒'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock customer support for all your queries.',
                icon: '💬'
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Active Suppliers' },
              { number: '50,000+', label: 'Products' },
              { number: '1M+', label: 'Monthly Orders' },
              { number: '98%', label: 'Satisfaction Rate' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of successful businesses on Vyaapar Hub</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150"
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition duration-150"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
