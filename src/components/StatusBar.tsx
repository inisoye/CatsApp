import * as React from 'react';
import { StatusBar as ReactNativeStatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface StatusBarProps {}

export const StatusBar: React.FunctionComponent<StatusBarProps> = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <ReactNativeStatusBar
      barStyle={'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
  );
};
