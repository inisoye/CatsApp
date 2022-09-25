import * as React from 'react';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

import { Theme } from 'lib';

interface SafeAreaViewProps {
  children: React.ReactNode;
}

export const SafeAreaView: React.FunctionComponent<SafeAreaViewProps> = ({
  children,
}) => {
  const theme = useTheme<Theme>();
  const { background } = theme.colors;

  return (
    <ReactNativeSafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: background,
      }}>
      {children}
    </ReactNativeSafeAreaView>
  );
};
