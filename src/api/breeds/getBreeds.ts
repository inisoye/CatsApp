import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';

const { CAT_API_KEY } = Config;

import { catApiClient, testCatApiClient } from 'lib';
import { Breed } from 'types';

export const getBreeds = async (): Promise<Breed[]> => {
  const { data } = await catApiClient.get<Breed[]>('/breeds');
  return data;
};

/* Identical with above but uses axios instance without default headers */
export const getTestBreeds = async (): Promise<Breed[]> => {
  const { data } = await testCatApiClient.get<Breed[]>(
    `/breeds?api_key=${CAT_API_KEY}`,
  );
  return data;
};

export const useBreeds = () => useQuery(['breeds'], getBreeds);

export const useTestBreeds = () => useQuery(['breeds'], getTestBreeds);
