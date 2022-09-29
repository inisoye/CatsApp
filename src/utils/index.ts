import { Dimensions } from 'react-native';

/**
 *  Simulate CSS flex/grid gap property:
 *  https://github.com/styled-components/styled-components/issues/3628#issuecomment-1143526313
 */
export const getGridChildWidth = (
  gap: number,
  padding: number,
  itemPerRow: number,
) => {
  const totalGapSize = (itemPerRow - 1) * gap;
  const windowWidth = Dimensions.get('window').width - padding * 2;
  const childWidth = (windowWidth - totalGapSize) / itemPerRow;

  return childWidth;
};
