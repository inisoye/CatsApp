import * as React from 'react';

import { Box, Text } from 'lib';
import { useLikedCatsStoreItems } from 'stores';
import { Image, LikeButton } from 'components';
import { getGridChildWidth } from 'utils';

interface LikedCatProps {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
}

const childWidth = getGridChildWidth();

export const LikedCat: React.FunctionComponent<LikedCatProps> = ({
  id,
  name,
  uri,
}) => {
  const { likedCats, unlikeCat } = useLikedCatsStoreItems();

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
