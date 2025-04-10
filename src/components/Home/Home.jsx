import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
  <div className="relative z-10 max-w-screen-xl mx-auto px-4 pb-20 pt-10 sm:py-24 sm:px-6 lg:px-8">
    
    {/* Flex Container for Side-by-Side Layout */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start">

      {/* Left Side - Image */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
        <img
          className="w-full max-w-md sm:max-w-lg rounded-lg shadow-lg"
          src="https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Trade Platform"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mt-10 sm:mt-0">
        <h2 className="text-4xl font-bold sm:text-5xl">
          India’s B2B Revolution with <br className="hidden sm:block"/> Technology & Trust
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Transforming trade for small businesses with transparency & efficiency.
        </p>

        <Link
          className="inline-flex items-center px-6 py-3 mt-6 text-white font-medium bg-green-700 rounded-lg hover:opacity-75"
          to="/login"
        >
          Get Started
        </Link>
      </div>

    </div>
  </div>
</section>


      {/* About Us Section */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">About Vyaapar Hub</h3>
          <p className="mt-4 text-gray-600">
            Founded in 2024, Vyaapar Hub is revolutionizing B2B trade in India by bridging the gap between 
            manufacturers, retailers, and wholesalers. Our mission is to empower small and medium businesses with 
            technology, transparency, and trust.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">How It Works</h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">1. Sign Up</h4>
              <p className="mt-2 text-gray-600">Create an account in minutes and get started.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">2. Browse & Order</h4>
              <p className="mt-2 text-gray-600">Explore a wide range of products and place orders easily.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">3. Secure Payments</h4>
              <p className="mt-2 text-gray-600">Enjoy 100% secure transactions with full transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Popular Categories</h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">Electronics</h4>
              <p className="mt-2 text-gray-600">Mobile accessories, gadgets, and more.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">Groceries</h4>
              <p className="mt-2 text-gray-600">Wholesale groceries at best prices.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">Clothing</h4>
              <p className="mt-2 text-gray-600">Fashion and textiles for retailers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">What Our Users Say</h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="italic">"Vyaapar Hub has transformed the way I do business!"</p>
              <h4 className="mt-2 font-semibold">- Rajesh, Retailer</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="italic">"I expanded my business beyond my local market!"</p>
              <h4 className="mt-2 font-semibold">- Priya, Manufacturer</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="italic">"Secure payments make this platform a game changer!"</p>
              <h4 className="mt-2 font-semibold">- Amit, Wholesaler</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Latest News & Updates</h3>
          <p className="mt-4 text-gray-600">Stay informed with the latest trends and insights in B2B trade.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">E-commerce Growth</h4>
              <p className="mt-2 text-gray-600">How digital trade is reshaping B2B in India.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-700">Small Business Trends</h4>
              <p className="mt-2 text-gray-600">Top trends shaping SMEs in 2025.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h3>
          <div className="mt-6 text-left max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold">How do I register?</h4>
            <p className="text-gray-600">Simply click on ‘Get Started’ and sign up in a few easy steps.</p>
            <h4 className="text-lg font-semibold mt-4">Is payment secure?</h4>
            <p className="text-gray-600">Yes, all payments are processed with 100% security.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
