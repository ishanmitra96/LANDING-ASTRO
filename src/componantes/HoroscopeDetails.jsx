// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const HoroscopeDetails = () => {
//   const { sign } = useParams(); // Get the zodiac sign from the URL
//   const navigate = useNavigate();

//   const zodiacData = {
//     aries: {
//       name: "Aries",
//       date: "March 21 - April 19",
//       description:
//         "Aries is the first astrological sign in the zodiac. Ruled by Mars, Aries are energetic, assertive, and passionate.",
//     },
//     taurus: {
//       name: "Taurus",
//       date: "April 20 - May 20",
//       description:
//         "Taurus is an earth sign. Known for their reliability and love of luxury, Taurus individuals are ruled by Venus.",
//     },
//     // Add more zodiac details here...
//   };

//   const details = zodiacData[sign];

//   if (!details) {
//     return (
//       <div className="text-center mt-10">
//         <h2 className="text-2xl font-bold">Zodiac sign not found!</h2>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-200 min-h-screen flex flex-col items-center p-8">
//       <h1 className="text-4xl font-bold mb-4">{details.name}</h1>
//       <p className="text-lg mb-4">{details.date}</p>
//       <p className="text-gray-700 max-w-lg text-center">{details.description}</p>
//       <button
//         onClick={() => navigate("/")}
//         className="mt-6 bg-blue-500 text-white px-4 py-2 rounded shadow"
//       >
//         Back to Horoscope
//       </button>
//     </div>
//   );
// };

// export default HoroscopeDetails;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HoroscopeDetails = ({ zodiacSign }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  

  // Button click handler
  const handleButtonClick = () => {
    setMessage("Have a great day ahead!");
  };
  const handleGoBack = () => {
    navigate("/");
  };

  return (




    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-700">
       
       <img
    src="/images/horoscope.gif"
    alt="Horoscope Icon"
    className="w-full h-full mx-auto mb-4"
  />
  <h1 className="text-3xl font-bold text-purple-800">
    HOROSCOPE
  </h1>
    
      <div className="bg-white bg-opacity-90 text-center max-w-3xl p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-purple-800">
          {zodiacSign || "(ZODIAC SIGN)"} TODAY'S HOROSCOPE
        </h1>
        <p className="text-gray-800 mt-4">
          A dynamic day ahead, {zodiacSign || "Zodiac Sign"}! Expect the
          unexpected, as the stars align to bring you a multitude of
          opportunities and exciting encounters. Today’s energies are electric,
          and you're primed to receive surprises that will propel you forward.
          Whether it's a sudden business proposal, a chance meeting with someone
          influential, or an unexpected phone call, be prepared to seize the
          moment.
        </p>

        <div className="mt-6">
          <div className="bg-yellow-100 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-yellow-600">
              Career & Finance:
            </h2>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
              <li>
                A sudden business proposal or new project sparks enthusiasm.
              </li>
              <li>Take bold steps, but ensure financial caution.</li>
            </ul>
          </div>

          <div className="bg-pink-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-pink-600">
              Love & Relationships:
            </h2>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
              <li>Singles, a chance meeting could lead to romance.</li>
              <li>Couples, open communication strengthens bonds.</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-around mt-8">
          <div className="text-center">
            <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full text-white font-bold">
              3, 9, 15
            </div>
            <p className="text-yellow-700 mt-2 text-sm">Lucky Numbers</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full text-white font-bold">
              Orange
            </div>
            <p className="text-orange-700 mt-2 text-sm">Lucky Colors</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full text-white font-bold">
              Tip
            </div>
            <p className="text-blue-700 mt-2 text-sm">
              Focus on self-reflection
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleButtonClick}
          className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition"
        >
          Click Me!
        </button>

        {/* Message displayed after button click */}
        {message && (
          <p className="mt-4 text-green-600 font-semibold">{message}</p>
        )}

        <div>
          <button
            onClick={handleGoBack}
            className=" mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition"
          >
            GO TO HOROSCOPE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeDetails;

// 1. inliner styling
{
  /* <div className="inline-flex">
  <button
    onClick={handleButtonClick}
    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition"
  >
    Click Me!
  </button>
</div> */
}

// 2. Centering the Button:
{
  /* <div className="flex justify-center items-center">
  <button
    onClick={handleButtonClick}
    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition"
  >
    Click Me!
  </button>
</div> */
}

// 3. Horizontal Buttons in a Row:
{
  /* <div className="flex gap-4 mt-6">
  <button
    onClick={handleButtonClick}
    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition"
  >
    Click Me!
  </button>
  <button
    onClick={handleGoBack}
    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition"
  >
    Go Back to Horoscope
  </button>
</div> */
}

// Example with Proper Alignment:
{
  /* <div className="flex justify-center items-center flex-col mt-6 space-y-4">
  <div className="flex gap-4">
    <button
      onClick={handleButtonClick}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition"
    >
      Click Me!
    </button>
    <button
      onClick={handleGoBack}
      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition"
    >
      Go Back to Horoscope
    </button>
  </div>
  {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
</div> */
}
