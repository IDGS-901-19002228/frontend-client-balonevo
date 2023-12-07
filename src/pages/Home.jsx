import { useState, useEffect } from 'react';
import CatalogoHome from '../components/CatalogoHome';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const handlePrevClick = () => {
    setActiveSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setActiveSlide((prev) => (prev + 1) % 3);
  };

  const slides = [
    // '/src/assets/logo_transparente.png',
    '/src/assets/ball.jpeg',
    '/src/assets/ball2.jpeg',
    '/src/assets/ball2.jpeg',
    // '/assets/mision.png',
  ];

  useEffect(() => {
    // Set interval for automatic sliding
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 2000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Run this effect once when the component mounts

  return (
    <>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                activeSlide === index ? 'block' : 'hidden'
              } absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out`}
              data-carousel-item
            >
              <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="absolut z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full bg-black ${activeSlide === index ? 'opacity-70' : 'opacity-30'}`}
              aria-current={activeSlide === index}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolutetop-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevClick}
        >
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextClick}
        >
          <span className="sr-only">Next</span>
        </button>
      </div>

      <CatalogoHome />
    </>
  );
}