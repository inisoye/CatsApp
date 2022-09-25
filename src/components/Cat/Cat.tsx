import * as React from 'react';
import { Image, Pressable } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Box, Text, Theme } from 'lib';
import { HeartIcon } from 'assets';

interface CatProps {
  name: string | undefined;
  uri: string | undefined;
}

export const Cat: React.FunctionComponent<CatProps> = ({ name, uri }) => {
  const { spacing, borderRadii } = useTheme<Theme>();

  const likeCat = () => {
    console.log('liking');
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
        onPress={likeCat}
        hitSlop={30}
        style={({ pressed }) => [
          {
            transform: [{ scale: pressed ? 0.8 : 1 }],
            marginLeft: spacing.m,
          },
        ]}>
        <HeartIcon isTransparent color="#BCBDBE" size={18} />
      </Pressable>
    </Box>
  );
};
