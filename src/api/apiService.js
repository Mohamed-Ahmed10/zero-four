import axiosClient from './axiosClient';

export const fetchFlags = async () => {
    const response = await axiosClient.get('/all?fields=name,flags');
    return response.data;
};

export const fetchCurrency = async (countryName) => {
    try {
        const response = await axiosClient.get('/name/' + countryName);
        console.log(response);
    } catch (error) {
        console.error("Error fetching currency:", error);
        throw new Error('Failed to fetch currency data');
    }
};