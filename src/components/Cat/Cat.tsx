import * as React from 'react';
import { Image, Pressable } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Box, Text, Theme } from 'lib';
import { HeartIcon } from 'assets';
import { useLikedCatsStoreItems } from 'stores';

interface CatProps {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
}

export const Cat: React.FunctionComponent<CatProps> = ({ id, name, uri }) => {
  const { spacing, borderRadii, colors } = useTheme<Theme>();
  const { toggleCat, likedCats } = useLikedCatsStoreItems();

  const isCatLiked = React.useMemo(
    () => !!likedCats.find(cat => cat.id === id),
    [id, likedCats],
  );

  const handlePress = () => {
    toggleCat({ id, name, uri }, isCatLiked);
  };

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
          style={{
            borderRadius: borderRadii.standard,
            height: spacing.xl,
            width: spacing.xl,
          }}
        />
        <Text variant="regular" marginLeft="m">
          {name}
        </Text>
      </Box>

      <Pressable
        onPress={handlePress}
        hitSlop={30}
        style={({ pressed }) => [
          {
            transform: [{ scale: pressed ? 0.7 : 1 }],
            marginLeft: spacing.m,
          },
        ]}>
        <HeartIcon
          isTransparent={!isCatLiked}
          color={isCatLiked ? colors.heart : '#BCBDBE'}
          size={18}
        />
      </Pressable>
    </Box>
  );
};
