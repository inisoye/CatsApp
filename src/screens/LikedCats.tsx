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

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background">
        <ScreenHeading />

        {
          /**
           * Despite its performance benefits, the use of Flashlist forgone here.
           * Its column styles are much harder to customise as columnWrapperStyle
           * is not supported: https://shopify.github.io/flash-list/docs/usage#scrolltooffset.
           * */
          likedCats.length ? (
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
          ) : (
            <Box paddingHorizontal="l">
              <Text variant="regular">No likes yet</Text>
            </Box>
          )
        }
      </Box>
    </SafeAreaView>
  );
};
