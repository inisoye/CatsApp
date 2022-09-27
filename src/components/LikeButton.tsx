import * as React from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'lib';
import { HeartIcon } from 'assets';
import { Button } from 'components';

interface LikeButtonProps {
  handlePress: () => void;
  isCatLiked: boolean;
}

export const LikeButton: React.FunctionComponent<LikeButtonProps> = ({
  handlePress,
  isCatLiked,
}) => {
  const { colors } = useTheme<Theme>();

  return (
    <Button
      onPress={handlePress}
      hitSlop={30}
      marginLeft="m"
      style={({ pressed }) => [
        {
          transform: [{ scale: pressed ? 0.7 : 1 }],
        },
      ]}>
      <HeartIcon
        isTransparent={!isCatLiked}
        color={isCatLiked ? colors.heart : '#BCBDBE'}
        size={18}
      />
    </Button>
  );
};
