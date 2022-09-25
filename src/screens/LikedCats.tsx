import * as React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Box, NavigatorParamList } from 'lib';
import { SafeAreaView, ScreenHeading } from 'components';

interface LikedCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'Cats I like'> {}

export const LikedCats: React.FunctionComponent<LikedCatsProps> = () => {
  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background">
        <ScreenHeading />
      </Box>
    </SafeAreaView>
  );
};
