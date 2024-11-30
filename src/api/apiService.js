import axiosClient from './axiosClient';

export const fetchFlags = async () => {
    const response = await axiosClient.get('/all?fields=name,flags');
    return response.data;
};
export const fetchCurrency = async (countryName) => {
    const response = await axiosClient.get('/name/' + countryName);
    return response.data;
}