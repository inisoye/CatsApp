import * as React from 'react';
import { Image } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Box, Text, Theme } from 'lib';
import { HeartIcon } from 'assets';

interface CatProps {
  name: string | undefined;
  uri: string | undefined;
}

export const Cat: React.FunctionComponent<CatProps> = ({ name, uri }) => {
  const { spacing, borderRadii } = useTheme<Theme>();

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
      <Box marginLeft="m">
        <HeartIcon isTransparent color="#BCBDBE" size={18} />
      </Box>
    </Box>
  );
};
