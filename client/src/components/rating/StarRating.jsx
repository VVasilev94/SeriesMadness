import React, { useState, useEffect } from 'react';


const StarRating = ({ userId, serieId }) => {
  const [ratings, setRatings] = useState({});
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    // Fetch stored ratings from local storage when the component mounts
    const storedRatings = localStorage.getItem('ratings');
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, []);

  useEffect(() => {
    // Set user rating for the current post if available in stored ratings
    if (ratings[userId] && ratings[userId][serieId]) {
      setUserRating(ratings[userId][serieId]);
    } else {
      setUserRating(0); // If no rating found, set to 0
    }
  }, [ratings, userId, serieId]);

  const handleRating = (ratingValue) => {
    // Update ratings object with the new rating for the current user and post
    const updatedRatings = {
      ...ratings,
      [userId]: {
        ...(ratings[userId] || {}),
        [serieId]: ratingValue,
      },
    };
    setRatings(updatedRatings);

    // Store updated ratings in local storage
    localStorage.setItem('ratings', JSON.stringify(updatedRatings));
  };

  return (
    <div>
      <p>User {userId} Post {serieId} Rating: {userRating}</p>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleRating(ratingValue)}
            style={{ color: ratingValue <= userRating ? 'gold' : 'gray' }}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;