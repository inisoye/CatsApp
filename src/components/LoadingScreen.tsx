import * as React from 'react';

import { Box, Text } from 'lib';
import { SafeAreaView } from 'components';

interface LoadingScreenProps {}

export const LoadingScreen: React.FunctionComponent<
  LoadingScreenProps
> = () => {
  return (
    <SafeAreaView>
      <Box padding="l">
        <Text variant="regular" opacity={0.5}>
          Loading
        </Text>
      </Box>
    </SafeAreaView>
  );
};
