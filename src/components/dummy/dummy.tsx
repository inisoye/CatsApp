import * as React from 'react';

import { Box, Text } from 'lib';

interface DummyProps {
  dummy?: string;
}

export const Dummy: React.FunctionComponent<DummyProps> = () => {
  return (
    <Box backgroundColor="background">
      <Text variant="heading">This is a dummy component with dummy text</Text>
    </Box>
  );
};
