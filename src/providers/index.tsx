import * as React from 'react';

import { ReactQueryProvider, RestyleProvider } from 'lib';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FunctionComponent<AppProvidersProps> = ({
  children,
}) => {
  return (
    <ReactQueryProvider>
      <RestyleProvider>{children}</RestyleProvider>
    </ReactQueryProvider>
  );
};

export default AppProviders;
