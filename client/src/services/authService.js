import * as request from "../data/request"

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, username, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        username,
        password,
    });

    return result;
};

export const register = (email, username, password) => request.post(`${baseUrl}/register`, {
    email,
    username,
    password,
});

export const logout = () => request.get(`${baseUrl}/logout`);