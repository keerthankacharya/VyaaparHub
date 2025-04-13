import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={Logo}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            VyaaparHub
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Founded in 2024 with a vision to "transform the way trade is done in India leveraging technology",
                        solving core trade problems faced by small and medium businesses, that are unique to India, 
                        through its unique India-fit low-cost business model by leveraging technology and bringing the benefits of 
                        eCommerce to them. It is a one stop shop for all business requirements in the b2b space.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Vyaapar Hub enables small manufacturers, farmers, and brands to market and sell their products across 
                        the country at low cost with 100% payment security and complete transparency. While doing so it enables 
                        small businesses such as shopkeepers, kirana, restaurants, street vendors, chemists, offices, small factories, 
                        contractors etc. to source from a large selection of high-quality products at best prices while 
                        facilitating efficient and transparent transactions with huge convenience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
