import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Box, NavigatorParamList, Text } from 'lib';
import { Cat, SafeAreaView, ScreenHeading } from 'components';
import { useBreeds } from 'api';
import { Breed } from 'types';

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

        <FlatList
          data={breeds}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Box>
    </SafeAreaView>
  );
};
