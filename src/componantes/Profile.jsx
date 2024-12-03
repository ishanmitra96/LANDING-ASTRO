// Profile.jsx
import React from "react";

const Profile = () => {
  const userReviews = [
    { name: "Bikram", review: "★★★★★", comment: "" },
    { name: "Kavita", review: "★★★★★", comment: "Very good astrologer" },
    { name: "Natik", review: "★★★★★", comment: "" },
    { name: "Mohan", review: "★★★★", comment: "" },
    { name: "Anuj", review: "★★★★", comment: "" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Profile Header */}
        <div className="flex gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">monoj</h2>
            <p className="text-gray-500">
              Tarot, Psychic, Life Coach <br />
              English, Hindi
            </p>
            <p className="text-gray-600 mt-2">
              Exp: 3 Years <br />
              ₹20/min
            </p>
            <div className="mt-4 flex gap-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Start Chat
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Start Call
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-green-600">14K mins</p>
            <p className="text-gray-500">7K mins</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">About me</h3>
          <p className="text-gray-600">
            Depshika is a Tarot Card Reader in India. She loves to help her
            clients when they are in need. Her readings are spirit-guided and
            work according to Astrology ethics to bring stability to people's
            lives. She provides guidance on Marriage Consultation, Career and
            Business, Wealth and Property, Love and Relationships, and more.
          </p>
        </div>

        {/* Ratings and Reviews */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          {/* Ratings */}
          <div>
            <h3 className="text-xl font-bold mb-2">Rating & Reviews</h3>
            <div className="flex items-center text-2xl font-bold">
              <span>4.99</span>
              <span className="text-gray-500 ml-2">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">5683 total</p>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">5</span>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">4</span>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-400 rounded"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
              {/* Add more bars for 3, 2, 1 */}
            </div>
          </div>

          {/* User Reviews */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-2">User Reviews</h3>
            <div className="space-y-4">
              {userReviews.map((review, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded shadow">
                  <p className="text-gray-700 font-bold">{review.name}</p>
                  <p className="text-yellow-400">{review.review}</p>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Similar Consultants */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Check Similar Consultants</h3>
          <p className="text-gray-500">Feature coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
