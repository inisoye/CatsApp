import * as React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Box, NavigatorParamList, Text } from 'lib';
import { SafeAreaView, ScreenHeading } from 'components';

interface LikedCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'Cats I like'> {}

export const LikedCats: React.FunctionComponent<LikedCatsProps> = () => {
  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background" paddingHorizontal="l">
        <ScreenHeading />
        <Text variant="heading">Liked</Text>
      </Box>
    </SafeAreaView>
  );
};
