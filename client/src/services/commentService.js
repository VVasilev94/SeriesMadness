import * as request from '../data/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (serieId) => {
    const query = new URLSearchParams({
        where: `serieId="${serieId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (serieId, text) => {
    const newComment = await request.post(baseUrl, {
        serieId,
        text,
    });

    return newComment;
};
