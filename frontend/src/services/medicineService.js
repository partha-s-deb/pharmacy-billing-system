import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/medicines';

export const getAll = () => axios.get(BASE_URL);
export const getById = (id) => axios.get(`${BASE_URL}/${id}`);
export const create = (data) => axios.post(BASE_URL, data);
export const update = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const remove = (id) => axios.delete(`${BASE_URL}/${id}`);
export const getExpiryAlerts = () => axios.get(`${BASE_URL}/expiry-alerts`);