import { useQuery } from '@tanstack/react-query';

import { testCatApiClient } from 'lib';
import { Breed } from 'types';

export const getBreeds = async (): Promise<Breed[]> => {
  const { data } = await testCatApiClient.get<Breed[]>('/breeds');
  return data;
};

export const useBreeds = () => useQuery(['breeds'], getBreeds);
