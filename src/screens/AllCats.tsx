import * as React from 'react';
import { Image } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shopify/restyle';

import { Box, NavigatorParamList, Text, Theme } from 'lib';
import { SafeAreaView, ScreenHeading } from 'components';
import { useBreeds } from 'api';
import { HeartIcon } from 'assets';

interface AllCatsProps
  extends BottomTabScreenProps<NavigatorParamList, 'All cats'> {}

export const AllCats: React.FunctionComponent<AllCatsProps> = () => {
  const { data: breeds, isLoading: areBreedsLoading } = useBreeds();
  const theme = useTheme<Theme>();

  const { xl } = theme.spacing;
  const { standard: standardRadius } = theme.borderRadii;

  if (areBreedsLoading) {
    return <Text variant="regular">Loading</Text>;
  }

  const { image, name } = breeds?.[0] || {};
  const { url: uri } = image || {};

  return (
    <SafeAreaView>
      <Box flex={1} backgroundColor="background" paddingHorizontal="l">
        <ScreenHeading />

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box flexDirection="row" alignItems="center">
            <Image
              source={{ uri }}
              style={{ width: xl, height: xl, borderRadius: standardRadius }}
            />
            <Text variant="regular" marginLeft="m">
              {name}
            </Text>
          </Box>

          <Box marginLeft="m">
            <HeartIcon isTransparent color="#BCBDBE" size={18} />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};
