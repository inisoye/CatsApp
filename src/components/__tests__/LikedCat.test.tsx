import * as React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { LikedCat } from 'components';
import { generateRandomCat } from 'tests';

describe('Liked cat component', () => {
  const randomCat = generateRandomCat();

  it('Renders correctly', () => {
    renderer.create(<LikedCat {...randomCat} />);
  });

  it('Renders cat (breed) name based on the name prop', () => {
    const { getByText } = render(<LikedCat {...randomCat} />);

    expect(getByText(randomCat.name)).toBeDefined();
  });
});
