import React, { useState, useEffect, useRef } from "react";
import Content from "./Content";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { bgColor: "bg-gray-100", text: "First slide" },
    { bgColor: "bg-gray-200", text: "Second slide" },
    { bgColor: "bg-gray-300", text: "Third slide" },
  ];
  const totalSlides = slides.length;
  const slideInterval = useRef();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000);

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white rounded-lg">
        <Content/>
      <div
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <div
              className={`flex justify-center items-center h-full ${slide.bgColor} p-6`}
            >
              <span className="text-4xl text-gray-800 transition duration-700">
                {slide.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 border border-gray-400 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-blue-700 border-blue-700" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
