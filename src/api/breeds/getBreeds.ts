import { useQuery } from '@tanstack/react-query';

import { catApiClient } from 'lib';
import { Breed } from 'types';

export const getBreeds = async (): Promise<Breed[] | undefined> => {
  const { data } = await catApiClient.get<Breed[]>('/breeds');
  return data;
};

export const useBreeds = () => useQuery(['breeds'], () => getBreeds());
