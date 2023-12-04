import * as request from "../data/request";

const baseUrl = 'http://localhost:3030/data/series'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (serieId) => {
    const result = await request.get(`${baseUrl}/${serieId}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const create = async (serieData) => {
    const result = await request.post(baseUrl, serieData);

    return result;
};

export const edit = async (serieId, serieData) => {
    const result = await request.put(`${baseUrl}/${serieId}`, serieData);

    return result;
};

export const remove = async (serieId) => request.remove(`${baseUrl}/${serieId}`);