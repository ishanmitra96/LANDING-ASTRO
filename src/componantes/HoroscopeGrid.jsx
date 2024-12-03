import React from "react";
import { useNavigate } from "react-router-dom";

const HoroscopeGrid = () => {
  const navigate = useNavigate();

  const zodiacSigns = [
    { name: "Aries", image: "/images/aries.png" },
    { name: "Taurus", image: "/images/taurus.png" },
    { name: "Gemini", image: "/images/gemini.png" },
    { name: "Cancer", image: "/images/cancer.png" },
    { name: "Leo", image: "/images/leo.png" },
    { name: "Virgo", image: "/images/virgo.png" },
    { name: "Libra", image: "/images/libra.png" },
    { name: "Scorpio", image: "/images/scorpio.png" },
    { name: "Sagittarius", image: "/images/sagittarius.png" },
    { name: "Capricorn", image: "/images/capricorn.png" },
    { name: "Aquarius", image: "/images/aquarius.png" },
    { name: "Pisces", image: "/images/pisces.png" },
  ];

  const handleSignClick = (sign) => {
    navigate(`/horoscope/${sign.toLowerCase()}`);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">HOROSCOPE</h1>
      <p className="text-lg mb-8">Select One</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mb-10">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            onClick={() => handleSignClick(sign.name)}
            className="flex flex-col items-center border-2 border-gray-300 bg-white shadow-md rounded-md p-4 cursor-pointer hover:bg-gray-100"
          >
            <img src={sign.image} alt={sign.name} className="w-16 h-16 mb-2" />
            <span className="text-lg font-medium">{sign.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoroscopeGrid;

