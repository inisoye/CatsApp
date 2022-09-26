import * as React from 'react';
import { Image } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Box, Text, Theme } from 'lib';
import { useLikedCatsStoreItems } from 'stores';
import { LikeButton } from './LikeButton';

interface CatProps {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
}

export const Cat: React.FunctionComponent<CatProps> = ({ id, name, uri }) => {
  const { spacing, borderRadii } = useTheme<Theme>();
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

      <LikeButton handlePress={handlePress} isCatLiked={isCatLiked} />
    </Box>
  );
};
