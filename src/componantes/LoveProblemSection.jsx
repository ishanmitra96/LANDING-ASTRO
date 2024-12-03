import React from "react";

const LoveProblemSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 bg-gray-50">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Solve <span className="text-brown-500">love problem</span>{" "}
          <span className="text-blue-500">just One click</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Consult your problem with our best astrologers
        </p>
        <button className="mt-6 px-6 py-2 bg-lime-400 text-black font-semibold rounded hover:bg-lime-500">
          CONSULT ASTROLOGER
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/14/04/25/couple-1822585_1280.jpg" // Replace this with your image URL
          alt="Couple in conflict"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default LoveProblemSection;
