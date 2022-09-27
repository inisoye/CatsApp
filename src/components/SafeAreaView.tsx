import * as React from 'react';
import {
  SafeAreaView as ReactNativeSafeAreaView,
  SafeAreaViewProps as ReactNativeSafeAreaViewProps,
} from 'react-native-safe-area-context';
import {
  BoxProps,
  createBox,
  createRestyleComponent,
  SpacingProps,
} from '@shopify/restyle';

import { Theme } from 'lib';

interface SafeAreaViewProps
  extends BoxProps<Theme>,
    SpacingProps<Theme>,
    ReactNativeSafeAreaViewProps {
  children?: React.ReactNode;
}

export const StyledReactNativeSafeAreaView = createRestyleComponent<
  SafeAreaViewProps,
  Theme
>([], createBox<Theme>(ReactNativeSafeAreaView));

export const SafeAreaView: React.FunctionComponent<SafeAreaViewProps> = ({
  children,
}) => {
  return (
    <StyledReactNativeSafeAreaView
      edges={['right', 'left', 'top']}
      flex={1}
      backgroundColor="background">
      {children}
    </StyledReactNativeSafeAreaView>
  );
};
