import * as React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { Cat } from 'components';
import { generateRandomCat } from 'tests';

describe('Cat component', () => {
  const randomCat = generateRandomCat();

  it('Renders correctly', () => {
    renderer.create(<Cat {...randomCat} />);
  });

  it('Renders cat (breed) name based on the name prop', () => {
    const { getByText } = render(<Cat {...randomCat} />);

    expect(getByText(randomCat.name)).toBeDefined();
  });
});
