import * as React from 'react';
import { Platform } from 'react-native';
import {
  createBox,
  createText,
  createTheme,
  ThemeProvider,
} from '@shopify/restyle';

const palette = {
  red: '#DE0202',
  dark: '#212227',
  white: '#FFFFFF',
};

const theme = createTheme({
  colors: {
    background: palette.white,
    primary: palette.dark,
    heart: palette.red,
  },
  spacing: {
    xs: 5,
    s: 10,
    m: 15,
    l: 25,
    xl: 40,
    '3xl': 100,
  },
  textVariants: {
    heading: {
      fontSize: 16,
      color: 'primary',
      /* Roboto is heavier than San Francisco at the same weight. */
      fontWeight: Platform.OS === 'ios' ? '600' : '500',
    },
    regular: {
      fontSize: 16,
      color: 'primary',
    },
    tab: {
      fontSize: 13,
      color: 'primary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;

interface RestyleProviderProps {
  children: React.ReactNode;
}

export const RestyleProvider: React.FunctionComponent<RestyleProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
