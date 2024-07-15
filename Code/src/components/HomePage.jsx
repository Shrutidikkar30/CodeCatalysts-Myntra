import React from 'react';
import Card from './Card';

const HomePage = () => {
  const cardsData = [
    { image: '/images/Formal.jpg', title: 'Product 1', description: 'Description 1' },
    { image: '/images/Denim.jpg', title: 'Product 2', description: 'Description 2' },
    { image: '/images/Casual.jpg', title: 'Product 3', description: 'Description 3' },
    // Add more cards as needed
  ];

  return (
    <div className="container mx-auto mt-4">
       <img 
        src="/images/home.png" 
        alt="Landscape" 
        className="w-full h-auto mb-8"
      />
      <div className="flex flex-wrap justify-around">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
