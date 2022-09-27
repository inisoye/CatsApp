import * as React from 'react';
import { useTheme } from '@shopify/restyle';
import FastImage from 'react-native-fast-image';

import { Box, Text, Theme } from 'lib';
import { useLikedCatsStoreItems } from 'stores';
import { LikeButton } from 'components';

interface LikedCatProps {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
}

export const LikedCat: React.FunctionComponent<LikedCatProps> = ({
  id,
  name,
  uri,
}) => {
  const { spacing, borderRadii } = useTheme<Theme>();
  const { unlikeCat, likedCats } = useLikedCatsStoreItems();

  const isCatLiked = React.useMemo(
    () => !!likedCats.find(cat => cat.id === id),
    [id, likedCats],
  );

  const handlePress = () => {
    unlikeCat(id);
  };

  return (
    <Box marginBottom="l">
      <FastImage
        source={{ uri }}
        style={{
          borderRadius: borderRadii.standard,
          height: spacing['4xl'],
          width: '100%',
        }}
      />

      <Box
        flexDirection="row"
        justifyContent="space-between"
        width={150}
        marginTop="s">
        <Text variant="regular">{name}</Text>

        <LikeButton handlePress={handlePress} isCatLiked={isCatLiked} />
      </Box>
    </Box>
  );
};
