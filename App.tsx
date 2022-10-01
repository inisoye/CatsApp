import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { AppProviders } from 'providers';
import { AppScreens } from 'lib';
import { StatusBar } from 'components';
import { getBreeds } from 'api';

const App = () => {
  React.useEffect(() => {
    /*  */
    const init = async () => {
      await getBreeds();
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <AppProviders>
      <StatusBar />
      <AppScreens />
    </AppProviders>
  );
};

export default App;
