import axios from 'axios';
import Config from 'react-native-config';

const { API_BASE_URL, CAT_API_KEY } = Config;

export const catApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'x-api-key': CAT_API_KEY },
});

export const testCatApiClient = axios.create({
  baseURL: API_BASE_URL,
});
