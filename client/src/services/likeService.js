import * as request from '../data/request';

const baseUrl = 'http://localhost:3030/data/likes'; 

export const likeCreator = async (userId, serieId) => {
  const newLike = await request.post(baseUrl, {
    userId,
    serieId,
  });

  return newLike;
};

export const checkUserLikedSeries = async (userId, serieId) => {
  const query = new URLSearchParams({
    where: `serieId="${serieId}"`,
    load: `owner=_ownerId:users`,
  });

  const liked = await request.get(`${baseUrl}?${query}`);
  

  return liked
};