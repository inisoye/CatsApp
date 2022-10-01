import * as React from 'react';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Box, type NavigatorParamList, Text } from 'lib';
import { LikedCatsList, SafeAreaView, ScreenHeading } from 'components';
import { useLikedCatsStoreItems } from 'stores';

interface LikedCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'Cats I like'> {}

export const LikedCats: React.FunctionComponent<LikedCatsProps> = () => {
  const { likedCats } = useLikedCatsStoreItems();

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background">
        <ScreenHeading />

        {likedCats.length ? (
          <LikedCatsList likedCats={likedCats} />
        ) : (
          <Box paddingHorizontal="l">
            <Text variant="regular" opacity={0.5}>
              No likes yet
            </Text>
          </Box>
        )}
      </Box>
    </SafeAreaView>
  );
};
