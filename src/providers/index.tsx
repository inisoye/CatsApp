import * as React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { ReactQueryProvider, RestyleProvider } from 'lib';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FunctionComponent<AppProvidersProps> = ({
  children,
}) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ReactQueryProvider>
        <RestyleProvider>{children}</RestyleProvider>
      </ReactQueryProvider>
    </SafeAreaProvider>
  );
};
