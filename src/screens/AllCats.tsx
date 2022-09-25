import * as React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Box, NavigatorParamList, Text } from 'lib';
import { SafeAreaView, ScreenHeading } from 'components';

interface AllCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'All cats'> {}

export const AllCats: React.FunctionComponent<AllCatsProps> = () => {
  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background" paddingHorizontal="l">
        <ScreenHeading />
        <Text variant="heading">All </Text>
      </Box>
    </SafeAreaView>
  );
};
