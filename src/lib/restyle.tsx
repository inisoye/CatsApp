import * as React from 'react';
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
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    standard: 10,
  },
  textVariants: {
    heading: {
      fontSize: 16,
      color: 'primary',
      fontWeight: '600',
    },
    regular: {
      fontSize: 16,
      color: 'primary',
    },
    tab: {
      fontSize: 13,
      marginTop: 2,
    },
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
