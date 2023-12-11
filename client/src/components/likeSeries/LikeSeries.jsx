import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as likesService from "../../services/likeService";


export default function LikeSeries({ serieId, userId }) {
    const [likesCount, setLikesCount] = useState(0);
  const [likedByUser, setLikedByUser] = useState(false);
 console.log(likesCount);

  useEffect(() => {
        likesService.checkUserLikedSeries(userId, serieId)
        .then((result) => {
          const userLiked = result.some((like) => like.userId === userId);
          setLikedByUser(userLiked);
          setLikesCount(result.length);
        })
        .catch(error=>{
          console.error("Error fetching likes:", error);
        })
  }, [userId, serieId]);

 
  const handleLikeClick = async () => {
    if (!likedByUser) {
      try {
        await likesService.likeCreator(userId, serieId);
        setLikedByUser(true);
        setLikesCount(state => state += 1);
      } catch (error) {
        console.error("Error liking series:", error);
      }
    }
    

    
  };
    return(
        <div id="likes">Likes: <span id="likes-count">{likesCount}</span>
        <div 
        id="action-buttons"><Link to={`/series/${serieId}`} id="like-btn" onClick={handleLikeClick}>Like</Link>
        </div>
        </div>
    )
}