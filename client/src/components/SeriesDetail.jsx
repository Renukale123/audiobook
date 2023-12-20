// // SeriesDetail.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useStateValue } from "../Context/StateProvider";
// import { actionType } from "../Context/reducer";

// const SeriesDetail = ({ series, allAudiobooks }) => {
//   const navigate = useNavigate();
//   const [, dispatch] = useStateValue();

//   const handleBookClick = (index) => {
//     // Update the audiobook in the context and navigate to the audiobook page
//     dispatch({ type: actionType.SET_AUDIOBOOK, audiobook: index });
//     navigate("/audiobook"); // Replace with the actual route for audiobook page
//   };

//   const seriesBooks = allAudiobooks.filter((book) => book.series === series);

//   return (
//     <div className="flex flex-wrap gap-4">
//       {seriesBooks.map((book, index) => (
//         <div
//           key={book._id}
//           className="cursor-pointer"
//           onClick={() => handleBookClick(index)}
//         >
//           <img
//             src={book.imageURL}
//             alt={book.name}
//             className="w-40 h-40 object-cover rounded-lg shadow-md"
//           />
//           <p className="text-sm text-gray-800 font-semibold mt-2">
//             {book.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SeriesDetail;
