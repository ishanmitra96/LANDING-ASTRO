import React from "react";

const astrologers = [
  {
    id: 1,
    name: "Sri. Manoj Sastri",
    skills: "Vedic, Numerology",
    languages: "Bengali, English, Hindi",
    experience: "8 Years",
    rate: "₹21/min",
    image: "https://via.placeholder.com/150", // Replace with astrologer image URL
  },
  {
    id: 2,
    name: "Prattush Sastri",
    skills: "Face Reading, Vastu",
    languages: "Hindi, English",
    experience: "5 Years",
    rate: "₹25/min",
    image: "https://via.placeholder.com/150", // Replace with astrologer image URL
  },
  {
    id: 3,
    name: "Smt. Shalini Roy",
    skills: "Palmistry, Tarot",
    languages: "English, Bengali",
    experience: "6 Years",
    rate: "₹30/min",
    image: "https://via.placeholder.com/150", // Replace with astrologer image URL
  },
];

export default function ConsultAstrologer() {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Consult an Astrologer
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Choose from our highly experienced astrologers for personalized
          guidance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {astrologers.map((astrologer) => (
            <div
              key={astrologer.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={astrologer.image}
                alt={astrologer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {astrologer.name}
                </h2>
                <p className="text-gray-600">
                  <strong>Skills:</strong> {astrologer.skills}
                </p>
                <p className="text-gray-600">
                  <strong>Languages:</strong> {astrologer.languages}
                </p>
                <p className="text-gray-600">
                  <strong>Experience:</strong> {astrologer.experience}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Rate:</strong> {astrologer.rate}
                </p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
                  Consult Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
