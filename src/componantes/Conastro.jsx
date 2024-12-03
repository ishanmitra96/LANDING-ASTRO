
import React, { useState } from "react";

const astrologers = [
  {
    id: 1,
    name: "Sri. Manoj Sastri",
    expertise: "Vedic, Numerology",
    languages: "Beng, Eng, Hindi",
    experience: 8,
    rate: 21,
    description:
      "Sri. Manoj Sastri is a renowned Astrologer with 8 years of expertise in Vedic and Numerology. He possesses a deep understanding of celestial influences on human life. Fluent in Bengali, English, and Hindi, he provides personalized guidance and remedies to individuals from diverse backgrounds.",
  },
  {
    id: 2,
    name: "Pramukh Sastri",
    expertise: "Vastu, Vedic",
    languages: "Beng, Hindi",
    experience: 10,
    rate: 29,
  },
  // Add other astrologers here...
];

export default function App() {
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        {astrologers.map((astro) => (
          <div
            key={astro.id}
            className="bg-orange-500 p-4 rounded shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedAstrologer(astro)}
          >
            <h2 className="text-lg font-semibold">{astro.name}</h2>
            <p>{astro.expertise}</p>
            <p>{astro.languages}</p>
            <p className="text-sm text-gray-500">Exp: {astro.experience} Years</p>
            <p className="text-sm text-green-600 font-bold">₹ {astro.rate}/min</p>
          </div>
        ))}
      </div>

      {selectedAstrologer && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedAstrologer(null)}
        >
          <div
            className="bg-orange-400 w-96 rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
              onClick={() => setSelectedAstrologer(null)}
            >
              x
            </button>
            <h2 className="text-lg font-bold">{selectedAstrologer.name}</h2>
            <p className="text-sm text-gray-500">{selectedAstrologer.expertise}</p>
            <p className="text-sm">{selectedAstrologer.languages}</p>
            <p className="text-sm">Exp: {selectedAstrologer.experience} Years</p>
            <p className="text-sm text-green-600 font-bold">
              ₹ {selectedAstrologer.rate}/min
            </p>
            <p className="mt-4 text-sm">{selectedAstrologer.description}</p>
            <div className="flex justify-between mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Chat
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
