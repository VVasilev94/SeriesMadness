import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div>
      <p>Rating: {rating}</p>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleRating(ratingValue)}
            style={{ color: ratingValue <= rating ? 'gold' : 'gray' }}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;