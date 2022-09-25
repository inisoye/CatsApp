import * as React from 'react';
import { useRoute } from '@react-navigation/native';

import { Box, Text } from 'lib';

export const ScreenHeading: React.FunctionComponent = () => {
  const { name } = useRoute();

  return (
    <Box backgroundColor="background" paddingVertical="l">
      <Text variant="heading" textTransform="capitalize">
        {name}
      </Text>
    </Box>
  );
};
