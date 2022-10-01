import { renderHook, act } from '@testing-library/react-native';

import { useLikedCatsStore, LikedCat } from 'stores';

describe('useLikedCatsStore()', () => {
  test('Should enable liking and unliking cats', () => {
    const { result } = renderHook(() => useLikedCatsStore());

    expect(result.current.likedCats.length).toBe(0);

    const randomCat: LikedCat = {
      id: '123456',
      name: 'A random cat',
      uri: 'https://cats.cats.com',
    };

    act(() => {
      result.current.toggleCat(randomCat, false);
    });

    expect(result.current.likedCats).toContainEqual(randomCat);

    act(() => {
      result.current.unlikeCat(randomCat.id);
    });

    expect(result.current.likedCats).not.toContainEqual(randomCat);
  });
});
