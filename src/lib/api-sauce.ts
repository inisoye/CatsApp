import { create } from 'apisauce';
import Config from 'react-native-config';

const { API_BASE_URL, CAT_API_KEY } = Config;

export const catApiClient = create({
  baseURL: API_BASE_URL,
  headers: { 'x-api-key': CAT_API_KEY },
});
