import * as React from 'react';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Box, type NavigatorParamList } from 'lib';
import {
  CatsList,
  LoadingScreen,
  SafeAreaView,
  ScreenHeading,
} from 'components';
import { useBreeds } from 'api';

interface AllCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'All cats'> {}

export const AllCats: React.FunctionComponent<AllCatsProps> = () => {
  const { data: breeds, isLoading: areBreedsLoading } = useBreeds();

  if (areBreedsLoading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background">
        <ScreenHeading />

        <CatsList breeds={breeds} />
      </Box>
    </SafeAreaView>
  );
};
