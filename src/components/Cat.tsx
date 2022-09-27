import * as React from 'react';

import { Box, Text } from 'lib';
import { useLikedCatsStoreItems } from 'stores';
import { LikeButton, Image } from 'components';

interface CatProps {
  id: string | undefined;
  name: string | undefined;
  uri: string | undefined;
}

export const Cat: React.FunctionComponent<CatProps> = ({ id, name, uri }) => {
  const { likedCats, toggleCat } = useLikedCatsStoreItems();

  const isCatLiked = React.useMemo(
    () => !!likedCats.find(cat => cat.id === id),
    [id, likedCats],
  );

  const handlePress = () => {
    toggleCat({ id, name, uri }, isCatLiked);
  };

  return (
    <Box
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      marginVertical="s"
      paddingHorizontal="l">
      <Box alignItems="center" flexDirection="row">
        <Image
          borderRadius="standard"
          height={40}
          source={{ uri }}
          width={40}
        />

        <Text marginLeft="m" variant="regular">
          {name}
        </Text>
      </Box>

      <LikeButton handlePress={handlePress} isCatLiked={isCatLiked} />
    </Box>
  );
};
