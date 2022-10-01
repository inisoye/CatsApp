import create from 'zustand';
import { persist } from 'zustand/middleware';

import { mmkvStorage } from 'utils';

export interface LikedCat {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
}

interface LikedCatsStore {
  likedCats: LikedCat[];
  unlikeCat: (id: string | undefined) => void;
  toggleCat: (cat: LikedCat, isCatLiked: boolean) => void;
}

export const useLikedCatsStore = create<LikedCatsStore>()(
  persist(
    set => ({
      likedCats: [],

      unlikeCat: id =>
        set(state => ({
          likedCats: state.likedCats.filter(cat => cat.id !== id),
        })),

      toggleCat: (toggledCat, isCatLiked) =>
        set(state => {
          return {
            likedCats: isCatLiked
              ? state.likedCats.filter(cat => cat.id !== toggledCat.id) // New state with liked cat
              : [...state.likedCats, { ...toggledCat }], // New state without unliked cat
          };
        }),
    }),
    {
      name: 'likedCatsStore',
      getStorage: () => mmkvStorage,
    },
  ),
);

const toggleCatSelector = (state: LikedCatsStore) => state.toggleCat;
const unlikeCatSelector = (state: LikedCatsStore) => state.unlikeCat;
const likedCatsSelector = (state: LikedCatsStore) => state.likedCats;

export const useLikedCatsStoreItems = () => {
  const toggleCat = useLikedCatsStore(toggleCatSelector);
  const unlikeCat = useLikedCatsStore(unlikeCatSelector);
  const likedCats = useLikedCatsStore(likedCatsSelector);

  return { toggleCat, unlikeCat, likedCats };
};
