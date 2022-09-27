import {
  BoxProps,
  createBox,
  createRestyleComponent,
  SpacingProps,
} from '@shopify/restyle';
import { Pressable, PressableProps } from 'react-native';

import { Theme } from 'lib';

export type ButtonProps = BoxProps<Theme> &
  SpacingProps<Theme> &
  PressableProps;

export const Button = createRestyleComponent<ButtonProps, Theme>(
  [],
  createBox<Theme>(Pressable),
);
