import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi"; // Search icon
import logo from "../../images/logo.png";

export default function Header() {
    const [shopDropdown, setShopDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    let timeoutId = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShopDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMouseEnter = () => {
        clearTimeout(timeoutId.current);
        setShopDropdown(true);
    };

    const handleMouseLeave = () => {
        timeoutId.current = setTimeout(() => {
            setShopDropdown(false);
        }, 300);
    };

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-3 py-1 w-96">
                        <input
                            type="text"
                            placeholder='Search "apple"'
                            className="bg-transparent outline-none flex-grow p-2"
                        />
                        <FiSearch className="text-gray-500" />
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="lg:hidden text-gray-800 text-2xl"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Navbar Links */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShopDropdown((prev) => !prev);
                                }}
                                className="nav-link focus:outline-none"
                            >
                                Shop
                            </button>
                            {shopDropdown && (
                                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 border border-gray-200">
                                    <ul>
                                        <li><Link to="/fruitsVegetables" className="dropdown-item">Fruits & Vegetables</Link></li>
                                        <li><Link to="/dairyBread" className="dropdown-item">Dairy & Bread</Link></li>
                                        <li><Link to="/provisionalItems" className="dropdown-item">Provisional Items</Link></li>
                                        <li><Link to="/homeEssentials" className="dropdown-item">Home Essentials</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        <Link
                            to="/login"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            My Cart
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-2">
                        <ul className="flex flex-col space-y-4">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <div className="relative">
                                <button
                                    onClick={() => setShopDropdown((prev) => !prev)}
                                    className="nav-link w-full text-left"
                                >
                                    Shop
                                </button>
                                {shopDropdown && (
                                    <div className="mt-1 w-full bg-white shadow-lg rounded-lg p-2 border border-gray-200">
                                        <ul>
                                            <li><Link to="/shop" className="dropdown-item">Fruits & Vegetables</Link></li>
                                            <li><Link to="/shop/clothing" className="dropdown-item">Dairy & Bread</Link></li>
                                            <li><Link to="/shop/accessories" className="dropdown-item">Provisional Items</Link></li>
                                            <li><Link to="/shop/accessories" className="dropdown-item">Home Essentials</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </ul>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        <NavLink to="/login" className="nav-link text-white bg-green-700 rounded-lg px-4 py-2">Login</NavLink>
                    </div>
                )}
            </nav>

            <style>{`
                .nav-link {
                    display: block;
                    padding: 8px 12px;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s;
                    color: #333;
                }
                .nav-link:hover {
                    color: #16a34a;
                }
                .dropdown-item {
                    display: block;
                    padding: 8px 12px;
                    color: #333;
                    transition: all 0.2s;
                }
                .dropdown-item:hover {
                    background-color: #f3f4f6;
                }
            `}</style>
        </header>
    );
}
