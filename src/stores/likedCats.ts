import create from 'zustand';

export interface LikedCat {
  id: string;
  name: string;
  imageUri: string;
}

interface LikedCatsStore {
  likedCats: LikedCat[];
  likeCat: (cat: LikedCat) => void;
  unlikeCat: (id: string) => void;
}

export const useNotificationStore = create<LikedCatsStore>(set => ({
  likedCats: [],

  likeCat: cat =>
    set(state => ({
      likedCats: [...state.likedCats, { ...cat }],
    })),

  unlikeCat: id =>
    set(state => ({
      likedCats: state.likedCats.filter(cat => cat.id !== id),
    })),
}));
