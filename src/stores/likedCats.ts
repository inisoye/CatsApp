import create from 'zustand';

export interface LikedCat {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
}

export interface LikedCatsStore {
  likedCats: LikedCat[];
  toggleCat: (cat: LikedCat, isCatLiked: boolean) => void;
}

const useLikedCatsStore = create<LikedCatsStore>(set => ({
  likedCats: [],

  toggleCat: (toggledCat, isCatLiked) =>
    set(state => {
      return {
        likedCats: isCatLiked
          ? state.likedCats.filter(cat => cat.id !== toggledCat.id) // New state with liked cat
          : [...state.likedCats, { ...toggledCat }], // New state without unliked cat
      };
    }),
}));

const toggleCatSelector = (state: LikedCatsStore) => state.toggleCat;
const likedCatsSelector = (state: LikedCatsStore) => state.likedCats;

export const useLikedCatsStoreItems = () => {
  const toggleCat = useLikedCatsStore(toggleCatSelector);
  const likedCats = useLikedCatsStore(likedCatsSelector);

  return { toggleCat, likedCats };
};
