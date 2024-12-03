// import React from "react";

// const ProductGrid = () => {
//   const products = [
//     {
//       category: "SPIRITUAL PRODUCT",
//       items: [
//         {
//           name: "SPIRITUAL BRACELET",
//           price: 500,
//           image: "https://via.placeholder.com/100", // Replace with your image URL
//           bgColor: "bg-gradient-to-r from-green-200 to-blue-200",
//         },
//         {
//           name: "RUDRAKSHA MALA",
//           price: 300,
//           image: "https://via.placeholder.com/100", // Replace with your image URL
//           bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
//         },
//         {
//           name: "LAUGHING BUDDHA",
//           price: 200,
//           image: "https://via.placeholder.com/100", // Replace with your image URL
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
//           image: "https://via.placeholder.com/100", // Replace with your image URL
//           bgColor: "bg-gradient-to-r from-yellow-300 to-yellow-500",
//         },
//         {
//           name: "BLUE SAPPHIRE",
//           price: 1700,
//           image: "https://via.placeholder.com/100", // Replace with your image URL
//           bgColor: "bg-gradient-to-r from-blue-300 to-blue-500",
//         },
//         {
//           name: "EMERALD",
//           price: 1200,
//           image: "https://via.placeholder.com/100", // Replace with your image URL
//           bgColor: "bg-gradient-to-r from-green-300 to-green-500",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="p-8">
//       {products.map((section, index) => (
//         <div key={index} className="mb-12">
//           {/* Category Title */}
//           <h2 className="text-center text-xl lg:text-2xl font-bold text-blue-500 mb-8">
//             {section.category}
//           </h2>

//           {/* Product Items */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {section.items.map((product, idx) => (
//               <div
//                 key={idx}
//                 className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white"
//               >
//                 {/* Product Image */}
//                 <div
//                   className={`h-24 w-24 mx-auto rounded-full p-4 ${product.bgColor} flex items-center justify-center`}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 {/* Product Details */}
//                 <h3 className="mt-4 text-center text-md font-semibold text-gray-700">
//                   {product.name}
//                 </h3>
//                 <p className="mt-2 text-center text-gray-600">₹ {product.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;





