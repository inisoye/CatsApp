import {
  BoxProps,
  createBox,
  createRestyleComponent,
  SpacingProps,
} from '@shopify/restyle';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import { Theme } from 'lib';

export type ImageProps = BoxProps<Theme> & SpacingProps<Theme> & FastImageProps;

export const Image = createRestyleComponent<ImageProps, Theme>(
  [],
  createBox<Theme>(FastImage),
);
