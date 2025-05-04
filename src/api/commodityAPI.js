import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getCommodityData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/commodity`);
    return response.data;
  } catch (error) {
    console.error('Error fetching commodity data:', error);
    return [];
  }
};
