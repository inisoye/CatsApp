import * as React from 'react';

import { AppProviders } from 'providers';
import { AppScreens } from 'lib';
import { StatusBar } from 'components';

const App = () => {
  return (
    <AppProviders>
      <StatusBar />
      <AppScreens />
    </AppProviders>
  );
};

export default App;
