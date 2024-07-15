import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/images/Icon.webp" alt="Myntra Logo" className="h-8" />
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full border rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button className="absolute right-2 top-2">
            <img src="/images/search.png" alt="Search" className="h-4 w-4" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
          <button>
            <img src="/images/notification.png" alt="Notifications" className="h-6 w-6" />
          </button>
          <button>
            <img src="/images/profile.png" alt="Profile" className="h-6 w-6" />
          </button>
          <button>
            <img src="/images/wishlist.png" alt="Wishlist" className="h-6 w-6" />
          </button>
          <button>
            <img src="/images/shopping-bag.png" alt="Bag" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-100 py-2 mt-4">
        <div className="container mx-auto flex justify-around">
          <div className="relative group">
            <button className="py-2 px-4 text-gray-700 font-semibold">Women</button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Topwear</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Bottomwear</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Indian & Fusion Wear</a></li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 text-gray-700 font-semibold">Men</button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Topwear</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Bottomwear</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Indian & Fusion Wear</a></li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 text-gray-700 font-semibold">Kids</button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Boys Clothing</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Girls Clothing</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Infants</a></li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 text-gray-700 font-semibold">Home & Living</button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Bed Linen</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Curtains</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Cushions</a></li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 px-4 text-gray-700 font-semibold">Discover</button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">What's New</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Gifts</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Myntra Luxe</a></li>
              </ul>
            </div>
            
          </div>
          <div className="relative group">
            <button className="py-2 px-4 text-gray-700 font-semibold">
                <Link to="/virtual-closet" className="nav-link">
                Virtual Closet
                </Link>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Saved Outfits</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Style Recommendations</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Closet Management</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
