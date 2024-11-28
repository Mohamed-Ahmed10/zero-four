import axiosClient from './axiosClient';

export const fetchFlags = async () => {
    const response = await axiosClient.get('/all?fields=name,flags');
    return response.data;
};