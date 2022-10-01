import * as React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';

import { LikeButton } from 'components';

describe('LikeButton component', () => {
  it('Calls press handler function when pressed', async () => {
    const handlePress = jest.fn();
    render(<LikeButton handlePress={handlePress} isCatLiked={false} />);

    fireEvent.press(screen.getByLabelText(/Like this cat/i));

    await waitFor(() => {
      expect(handlePress).toHaveBeenCalled();
    });
  });

  it('Displays differently for already liked cats', async () => {
    const handlePress = jest.fn();
    render(<LikeButton handlePress={handlePress} isCatLiked={true} />);

    await waitFor(() => {
      expect(screen.getByLabelText(/Unlike this cat/i)).toBeDefined();
    });
  });
});
