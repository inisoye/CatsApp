import * as React from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'lib';
import { Box, Text } from 'lib';
import { useLikedCatsStoreItems } from 'stores';
import { Image, LikeButton } from 'components';
import { useGridChildWidth } from 'hooks';

interface LikedCatProps {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
  numberOfColumns: number;
}

export const LikedCat: React.FunctionComponent<LikedCatProps> = ({
  id,
  name,
  uri,
  numberOfColumns,
}) => {
  const { likedCats, unlikeCat } = useLikedCatsStoreItems();
  const { spacing } = useTheme<Theme>();
  const childWidth = useGridChildWidth(spacing.l, spacing.l, numberOfColumns);

  const isCatLiked = React.useMemo(
    () => !!likedCats.find(cat => cat.id === id),
    [id, likedCats],
  );

  const handlePress = () => {
    unlikeCat(id);
  };

  return (
    <Box marginBottom="l">
      <Image
        borderRadius="standard"
        height={150}
        source={{ uri }}
        width={childWidth}
      />

      <Box
        flexDirection="row"
        justifyContent="space-between"
        marginTop="s"
        width={150}>
        <Box maxWidth={'78%'}>
          <Text variant="regular">{name}</Text>
        </Box>

        <LikeButton handlePress={handlePress} isCatLiked={isCatLiked} />
      </Box>
    </Box>
  );
};
