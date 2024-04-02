import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiAddCircleLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const ProductRating = ({ initialRatings }) => {
  const [ratings, setRatings] = useState(initialRatings);
  const [hoveredRating, setHoveredRating] = useState(null);
  const [userRating, setUserRating] = useState(null);

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleRatingLeave = () => {
    setHoveredRating(null);
  };

  const handleAddRating = () => {
    if (userRating !== null) {
      setRatings([...ratings, userRating]);
      setUserRating(null);
    }
  };
  const [add, setAdd] = useState(false);
  const token = useSelector((state) => state.userReducer.loged_user.token);

  return (
    <div>
      <div className="flex justify-between  items-center">
        <div className="flex items-start justify-start gap-4">
          <p>Ratings:</p>
          {ratings?.map((rating, index) => (
            <FaStar key={index} size={24} color="gold" />
          ))}
        </div>
        {token ? (
          <>
            <button onClick={() => setAdd((prev) => !prev)}>
              {add ? (
                <ImCancelCircle className="m-2" size={24} />
              ) : (
                <RiAddCircleLine className="m-2" size={24} />
              )}
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      {add && (
        <>
          <p>Your Rating:</p>
          <div className="flex justify-between items-center">
            <div className="flex items-start justify-start gap-4">
              {[1, 2, 3, 4, 5].map((rating) => (
                <motion.div
                  key={rating}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleRatingClick(rating)}
                  onMouseEnter={() => handleRatingHover(rating)}
                  onMouseLeave={handleRatingLeave}
                >
                  <FaStar
                    size={24}
                    color={
                      rating <= (hoveredRating || userRating) ? "gold" : "gray"
                    }
                  />
                </motion.div>
              ))}
            </div>
            <button
              className=" bg-gray-50 hover:bg-gray-200 rounded-full flex items-center justify-center"
              onClick={handleAddRating}
            >
              <AiOutlineCheckCircle color="green" className="m-2" size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductRating;
// import React, { useState } from "react";
// import {
//   BiSolidStar,
//   BiSolidStarHalf,
//   BiSolidStarOutline,
// } from "react-icons/bi";
// import { motion } from "framer-motion";

// const ProductRating = ({ initialRatings }) => {
//   const [ratings, setRatings] = useState(initialRatings);
//   const [hoveredRating, setHoveredRating] = useState(null);
//   const [userRating, setUserRating] = useState(null);

//   const handleRatingClick = (rating) => {
//     setUserRating(rating);
//   };

//   const handleRatingHover = (rating) => {
//     setHoveredRating(rating);
//   };

//   const handleRatingLeave = () => {
//     setHoveredRating(null);
//   };

//   const handleAddRating = () => {
//     if (userRating !== null) {
//       // Limit the number of stars to 5
//       const newRatings =
//         ratings.length < 5 ? [...ratings, userRating] : [...ratings];
//       setRatings(newRatings);
//       setUserRating(null);
//     }
//   };

//   // Calculate the average rating
//   const averageRating =
//     ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;

//   // Function to render stars with half and quarter stars
//   const renderStars = (rating) => {
//     const wholeStars = Math.floor(rating);
//     const decimal = rating - wholeStars;
//     const stars = [];

//     for (let i = 0; i < wholeStars; i++) {
//       stars.push(<BiSolidStar key={i} size={24} color="gold" />);
//     }

//     if (decimal >= 0.75) {
//       stars.push(<BiSolidStar key={wholeStars} size={24} color="gold" />);
//     } else if (decimal >= 0.25) {
//       stars.push(<BiSolidStarHalf key={wholeStars} size={24} color="gold" />);
//     } else if (decimal > 0) {
//       stars.push(
//         <BiSolidStarOutline key={wholeStars} size={24} color="gold" />
//       );
//     }

//     // Fill the rest with gray stars if less than 5
//     for (let i = stars.length; i < 5; i++) {
//       stars.push(<BiSolidStarOutline key={i} size={24} color="gray" />);
//     }

//     return stars;
//   };

//   return (
//     <div>
//       <div>
//         <p>Average Rating: {averageRating.toFixed(2)}</p>
//         <p>Number of Ratings: {ratings.length}</p>
//       </div>
//       <div>
//         <p>Existing Ratings:</p>
//         {renderStars(averageRating)}
//       </div>
//       <p>Your Rating:</p>
//       <div>
//         {[1, 2, 3, 4, 5].map((rating) => (
//           <motion.div
//             key={rating}
//             whileHover={{ scale: 1.2 }}
//             onClick={() => handleRatingClick(rating)}
//             onMouseEnter={() => handleRatingHover(rating)}
//             onMouseLeave={handleRatingLeave}
//           >
//             {userRating >= rating ? (
//               <BiSolidStar key={rating} size={24} color="gold" />
//             ) : (
//               <BiSolidStarOutline
//                 key={rating}
//                 size={24}
//                 color={rating <= hoveredRating ? "gold" : "gray"}
//               />
//             )}
//           </motion.div>
//         ))}
//       </div>
//       <button onClick={handleAddRating}>Add Your Rating</button>
//     </div>
//   );
// };

// export default ProductRating;
