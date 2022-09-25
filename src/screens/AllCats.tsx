import * as React from 'react';
import { FlatList, Image, ListRenderItem } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shopify/restyle';

import { Box, NavigatorParamList, Text, Theme } from 'lib';
import { SafeAreaView, ScreenHeading } from 'components';
import { useBreeds } from 'api';
import { HeartIcon } from 'assets';
import { Breed } from 'types';

interface CatProps {
  name: string | undefined;
  uri: string | undefined;
}

export const Cat: React.FunctionComponent<CatProps> = ({ name, uri }) => {
  const theme = useTheme<Theme>();

  const { xl } = theme.spacing;
  const { standard: standardRadius } = theme.borderRadii;

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="l"
      marginVertical="s">
      <Box flexDirection="row" alignItems="center">
        <Image
          source={{ uri }}
          style={{ borderRadius: standardRadius, height: xl, width: xl }}
        />
        <Text variant="regular" marginLeft="m">
          {name}
        </Text>
      </Box>
      <Box marginLeft="m">
        <HeartIcon isTransparent color="#BCBDBE" size={18} />
      </Box>
    </Box>
  );
};

const renderItem: ListRenderItem<Breed> = ({ item }) => {
  return <Cat name={item.name} uri={item.image?.url} />;
};

interface AllCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'All cats'> {}

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
