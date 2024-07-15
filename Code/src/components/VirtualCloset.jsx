import React from 'react';
import Slider from 'react-slick';
import FloatingCamera from './FloatingCamera';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VirtualCloset = () => {
  const colorTrends = [
    { id: 1, title: 'Lavender', description: 'Explore trends in Lavender.', image: '/images/Lavendar.jpg' },
    { id: 2, title: 'HeritageBlue', description: 'Explore trends in Heritage blue.', image: '/images/Blue.jpg' },
    { id: 3, title: 'Yellow', description: 'Explore trends in Yellow.', image: '/images/Yellow.jpg' },
    { id: 4, title: 'Green', description: 'Explore trends in Green.', image: '/images/green.avif' },
    { id: 5, title: 'Purple', description: 'Explore trends in Purple.', image: '/images/Purple.jpg' },
    { id: 6, title: 'AmberHaze', description: 'Explore trends in Amber Haze.', image: '/images/Amber_haze.jpg' },
    { id: 8, title: 'Blue', description: 'Explore trends in Blue.', image: '/images/blue.avif' },
    { id: 9, title: 'Mint', description: 'Explore trends in Mint.', image: '/images/Mint.jpg' },
    { id: 10, title: 'Red', description: 'Explore trends in Red.', image: '/images/Red.jpg' },
    { id: 11, title: 'Teal', description: 'Explore trends in Teal.', image: '/images/Teal.jpg' },
    // Add more color trends as needed
  ];

  const themeTrends = [
    { id: 1, title: 'K-pop', description: 'Discover K-pop themed outfits.', image: '/images/kpop.jpg' },
    { id: 2, title: 'Vintage', description: 'Discover vintage themed outfits.', image: '/images/vintage.jpg' },
    { id: 3, title: 'Boho', description: 'Discover boho themed outfits.', image: '/images/Boho.jpg' },
    // Add more theme trends as needed
  ];

  const occasionTrends = [
    { id: 1, title: 'Smart Casual', description: 'Find smart casual outfits.', image: '/images/Denim.jpg' },
    { id: 2, title: 'Casual', description: 'Find casual outfits.', image: '/images/Casual.jpg' },
    { id: 3, title: 'Work', description: 'Find work outfits.', image: '/images/Formal.jpg' },
    // Add more occasion trends as needed
  ];

  const renderCarousel = (trends) => (
    <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1}>
      {trends.map((trend) => (
        <div key={trend.id} className="relative p-2">
          <div className="relative overflow-hidden transition duration-500 ease-in-out transform hover:scale-105">
            <img src={trend.image} alt={trend.title} className="carousel-image w-full h-80 object-cover transition duration-500 ease-in-out hover:blur-sm" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full transition duration-500 ease-in-out opacity-0 hover:opacity-100">
              <h3 className="text-2xl font-semibold mb-2">{trend.title}</h3>
              <p>{trend.description}</p>
              <div className="w-16 h-1 bg-pink-500 mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );

  const renderSection = (trends) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {trends.map((trend) => (
        <div key={trend.id} className="border rounded-lg overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-gray-100">
          <img src={trend.image} alt={trend.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">{trend.title}</h3>
            <p>{trend.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Virtual Closet</h1>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Shop by <span className="italic font-cursive">Occasion</span></h2>
        {renderSection(occasionTrends)}
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Shop by <span className="italic font-cursive">Color</span></h2>
        {renderCarousel(colorTrends)}
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Shop by <span className="italic font-cursive">Theme</span></h2>
        {renderSection(themeTrends)}
      </div>
      <FloatingCamera onUpload={(file) => console.log('Uploaded file:', file)} />
    </div>
  );
};

export default VirtualCloset;
