import * as React from 'react';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

import { useBackground } from 'hooks';

interface SafeAreaViewProps {
  children?: React.ReactNode;
}

export const SafeAreaView: React.FunctionComponent<SafeAreaViewProps> = ({
  children,
}) => {
  const background = useBackground();

  return (
    <ReactNativeSafeAreaView
      edges={['right', 'left', 'top']}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: background,
      }}>
      {children}
    </ReactNativeSafeAreaView>
  );
};
