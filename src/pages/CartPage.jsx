// import React from "react";

// const CartPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
//       {/* Cart Container */}
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
//         {/* Cart Header */}
//         <div className="flex justify-between items-center border-b pb-4">
//           <h2 className="text-lg font-semibold text-gray-700">Your cart</h2>
//           <button
//             aria-label="Close Cart"
//             className="text-gray-500 hover:text-gray-700"
//           >
//             ✖
//           </button>
//         </div>

//         {/* Cart Item */}
//         <div className="flex items-center justify-between py-4 border-b">
//           {/* Product Image */}
//           <div className="w-16 h-16">
//             <img
//               src="https://via.placeholder.com/64" // Replace with actual product image URL
//               alt="Good Luck Bracelet"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="flex-1 px-4">
//             <h3 className="text-sm font-medium text-gray-700">
//               Good Luck Bracelet - Attract prosperity and positivity with this
//               elegant, handcrafted design featuring lucky charms and natural
//               gemstones (Adjustable size, 925 Sterling Silver)
//             </h3>
//             <div className="mt-2 flex items-center">
//               {/* Rating Stars */}
//               <div className="flex">
//                 {[...Array(5)].map((_, index) => (
//                   <span key={index} className="text-yellow-500 text-sm">
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Quantity Controls */}
//           <div className="flex items-center">
//             <button
//               aria-label="Decrease quantity"
//               className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l hover:bg-gray-300"
//             >
//               –
//             </button>
//             <span className="px-3 py-1 border-t border-b text-gray-700">1</span>
//             <button
//               aria-label="Increase quantity"
//               className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r hover:bg-gray-300"
//             >
//               +
//             </button>
//           </div>
//         </div>

//         {/* Cart Actions */}
//         <div className="py-6 text-center">
//           <button className="text-orange-500 hover:underline">
//             Continue shopping
//           </button>
//           <p className="mt-6 text-sm text-gray-600">
//             Have an account?{" "}
//             <button className="text-orange-500 hover:underline">
//               Log in to check out faster.
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



// import React, { useState } from "react";

// const App = () => {
//   const [showCart, setShowCart] = useState(false); // To control the modal visibility
//   const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product details

//   const products = [
//     {
//       category: "SPIRITUAL PRODUCT",
//       items: [
//         {
//           name: "SPIRITUAL BRACELET",
//           price: 500,
//           image: "https://via.placeholder.com/100",
//           description: "An elegant bracelet to attract positivity and prosperity.",
//           bgColor: "bg-gradient-to-r from-green-200 to-blue-200",
//         },
//         {
//           name: "RUDRAKSHA MALA",
//           price: 300,
//           image: "https://via.placeholder.com/100",
//           description: "Sacred Rudraksha Mala for spiritual growth.",
//           bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
//         },
//         {
//           name: "LAUGHING BUDDHA",
//           price: 200,
//           image: "https://via.placeholder.com/100",
//           description: "A symbol of happiness and wealth.",
//           bgColor: "bg-gradient-to-r from-orange-300 to-red-300",
//         },
//       ],
//     },
//     {
//       category: "GEMSTONE",
//       items: [
//         {
//           name: "YELLOW SAPPHIRE",
//           price: 1500,
//           image: "https://via.placeholder.com/100",
//           description: "A powerful gemstone to boost wisdom and prosperity.",
//           bgColor: "bg-gradient-to-r from-yellow-300 to-yellow-500",
//         },
//         {
//           name: "BLUE SAPPHIRE",
//           price: 1700,
//           image: "https://via.placeholder.com/100",
//           description: "A gemstone for mental clarity and focus.",
//           bgColor: "bg-gradient-to-r from-blue-300 to-blue-500",
//         },
//         {
//           name: "EMERALD",
//           price: 1200,
//           image: "https://via.placeholder.com/100",
//           description: "An emerald to attract balance and growth.",
//           bgColor: "bg-gradient-to-r from-green-300 to-green-500",
//         },
//       ],
//     },
//   ];

//   const handleProductClick = (product) => {
//     setSelectedProduct(product); // Set the clicked product
//     setShowCart(true); // Show the modal
//   };

//   const closeModal = () => {
//     setShowCart(false); // Hide the modal
//     setSelectedProduct(null); // Reset selected product
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Product Grid */}
//       <div className="p-8">
//         {products.map((section, index) => (
//           <div key={index} className="mb-12">
//             {/* Category Title */}
//             <h2 className="text-center text-xl lg:text-2xl font-bold text-blue-500 mb-8">
//               {section.category}
//             </h2>

//             {/* Product Items */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {section.items.map((product, idx) => (
//                 <div
//                   key={idx}
//                   className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white cursor-pointer"
//                   onClick={() => handleProductClick(product)}
//                 >
//                   {/* Product Image */}
//                   <div
//                     className={`h-24 w-24 mx-auto rounded-full p-4 ${product.bgColor} flex items-center justify-center`}
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-full w-full object-contain"
//                     />
//                   </div>

//                   {/* Product Details */}
//                   <h3 className="mt-4 text-center text-md font-semibold text-gray-700">
//                     {product.name}
//                   </h3>
//                   <p className="mt-2 text-center text-gray-600">
//                     ₹ {product.price}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {showCart && selectedProduct && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               ✖
//             </button>

//             {/* Modal Content */}
//             <div className="flex flex-col items-center">
//               {/* Product Image */}
//               <div className="w-24 h-24">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>

//               {/* Product Details */}
//               <h3 className="mt-4 text-lg font-bold text-gray-800">
//                 {selectedProduct.name}
//               </h3>
//               <p className="mt-2 text-gray-600 text-center">
//                 {selectedProduct.description}
//               </p>
//               <p className="mt-4 text-lg text-gray-800 font-semibold">
//                 ₹ {selectedProduct.price}
//               </p>

//               {/* Actions */}
//               <div className="mt-6 flex items-center gap-4">
//                 <button
//                   onClick={closeModal}
//                   className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
//                 >
//                   Close
//                 </button>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

