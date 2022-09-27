import * as React from 'react';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FlashList, type ListRenderItem } from '@shopify/flash-list';

import { Box, type NavigatorParamList, Text } from 'lib';
import { Cat, SafeAreaView, ScreenHeading } from 'components';
import { useBreeds } from 'api';
import type { Breed } from 'types';

interface AllCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'All cats'> {}

const renderItem: ListRenderItem<Breed> = ({ item }) => {
  return <Cat name={item.name} uri={item.image?.url} id={item.id} />;
};

export const AllCats: React.FunctionComponent<AllCatsProps> = () => {
  const { data: breeds, isLoading: areBreedsLoading } = useBreeds();

  if (areBreedsLoading) {
    return <Text variant="regular">Loading</Text>;
  }

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background">
        <ScreenHeading />

        <FlashList
          data={breeds}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          estimatedItemSize={60}
        />
      </Box>
    </SafeAreaView>
  );
};
