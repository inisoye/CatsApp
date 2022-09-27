import * as React from 'react';
import { FlatList, type ListRenderItem } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shopify/restyle';

import { Box, type NavigatorParamList, Text, Theme } from 'lib';
import { LikedCat, SafeAreaView, ScreenHeading } from 'components';
import { type LikedCat as LikedCatType, useLikedCatsStoreItems } from 'stores';

interface LikedCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'Cats I like'> {}

const renderItem: ListRenderItem<LikedCatType> = ({ item }) => {
  return <LikedCat name={item.name} uri={item.uri} id={item.id} />;
};

export const LikedCats: React.FunctionComponent<LikedCatsProps> = () => {
  const { spacing } = useTheme<Theme>();
  const { likedCats } = useLikedCatsStoreItems();

  if (!likedCats.length) {
    return <Text variant="regular">No likes yet</Text>;
  }

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background">
        <ScreenHeading />

        <FlatList
          data={likedCats}
          renderItem={renderItem}
          keyExtractor={item => item.id as string}
          numColumns={2}
          // eslint-disable-next-line react-native/no-inline-styles
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingHorizontal: spacing.l,
          }}
        />
      </Box>
    </SafeAreaView>
  );
};
