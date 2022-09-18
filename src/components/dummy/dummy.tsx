import * as React from 'react';
import { Text, View } from 'react-native';

interface DummyProps {
  dummy?: string;
}

export const Dummy: React.FunctionComponent<DummyProps> = () => {
  return (
    <View>
      <Text>This is a dummy component with dummy text</Text>
    </View>
  );
};
