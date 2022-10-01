import * as React from 'react';
import { FlatList, type ListRenderItem } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'lib';
import { LikedCat } from 'components';
import { type LikedCat as LikedCatType } from 'stores';

interface LikedCatsListProps {
  likedCats: LikedCatType[];
}

export const LikedCatsList: React.FunctionComponent<LikedCatsListProps> = ({
  likedCats,
}) => {
  const { spacing } = useTheme<Theme>();
  const NUMBER_OF_COLUMNS = 2;

  const renderItem: ListRenderItem<LikedCatType> = ({ item }) => {
    return (
      <LikedCat
        name={item.name}
        uri={item.uri}
        id={item.id}
        numberOfColumns={NUMBER_OF_COLUMNS}
      />
    );
  };

  /**
   * Despite its performance benefits, the use of Flashlist forgone here.
   * Its column styles are much harder to customise as columnWrapperStyle
   * is not supported: https://shopify.github.io/flash-list/docs/usage#scrolltooffset.
   * */
  return (
    <FlatList
      data={likedCats}
      renderItem={renderItem}
      keyExtractor={item => item.id as string}
      numColumns={2}
      // eslint-disable-next-line react-native/no-inline-styles
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: spacing.l,
      }}
    />
  );
};
