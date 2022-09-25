import { useTheme } from '@shopify/restyle';

import { Theme } from 'lib';

export const useBackground = () => {
  const theme = useTheme<Theme>();
  const { background } = theme.colors;

  return background;
};
