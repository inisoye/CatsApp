import * as React from 'react';
import { Pressable } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'lib';
import { HeartIcon } from 'assets';

interface LikeButtonProps {
  handlePress: () => void;
  isCatLiked: boolean;
}

export const LikeButton: React.FunctionComponent<LikeButtonProps> = ({
  handlePress,
  isCatLiked,
}) => {
  const { spacing, colors } = useTheme<Theme>();

  return (
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
  );
};
