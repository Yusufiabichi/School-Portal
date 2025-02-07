import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { img1, img2, img3, img4 } from '../assets/img';

const images = [
  {
    src: img1,
    text: 'Slide 1: Captivating Beauty',
  },
  {
    src: img2,
    text: 'Slide 2: Unparalleled Elegance',
  },
  {
    src: img3,
    text: 'Slide 3: Infinite Possibilities',
  },
  {
    src: img4,
    text: 'Slide 4: The last slide here',
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 0.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-96">
      {/* Slider Container */}
      <div className="relative flex justify-center items-center h-full">
        <AnimatePresence>
          {images.map((image, index) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                className="absolute w-full h-full flex justify-center items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={image.src}
                  alt={image.text}
                  className="w-full h-full object-contain rounded-lg"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center px-4">
                    {image.text}
                  </h2>
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-gray-200' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
