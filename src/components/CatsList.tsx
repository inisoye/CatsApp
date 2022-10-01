import * as React from 'react';
import { FlashList, type ListRenderItem } from '@shopify/flash-list';

import { Cat } from 'components';
import type { Breed } from 'types';

interface CatsListProps {
  breeds: Breed[] | undefined;
}

const renderItem: ListRenderItem<Breed> = ({ item }) => {
  return <Cat name={item.name} uri={item.image?.url} id={item.id} />;
};

export const CatsList: React.FunctionComponent<CatsListProps> = ({
  breeds,
}) => {
  return (
    <FlashList
      data={breeds}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      estimatedItemSize={60}
    />
  );
};
