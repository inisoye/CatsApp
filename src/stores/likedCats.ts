import create from 'zustand';
import { persist, type StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

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

const storage = new MMKV();

const mmkvStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};

const useLikedCatsStore = create<LikedCatsStore>()(
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
