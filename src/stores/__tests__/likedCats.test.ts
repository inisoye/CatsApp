import { renderHook, act } from '@testing-library/react-native';

import { useLikedCatsStore } from 'stores';
import { generateRandomCat } from 'tests';

describe('useLikedCatsStore()', () => {
  test('Cats can be successfuly liked or unliked', () => {
    const { result } = renderHook(() => useLikedCatsStore());

    expect(result.current.likedCats.length).toBe(0);

    const randomCat = generateRandomCat();

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
