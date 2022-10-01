import { useWindowDimensions } from 'react-native';

export const useGridChildWidth = (
  gap: number,
  padding: number,
  itemPerRow: number,
) => {
  const { width } = useWindowDimensions();

  /**
   *  Simulate CSS flex/grid gap property:
   *  https://github.com/styled-components/styled-components/issues/3628#issuecomment-1143526313
   */
  const totalGapSize = (itemPerRow - 1) * gap;
  /**
   *  Calculated width imperfect in landscape on IOS due to SafeAreaView's additional padding.
   *  Could be fixed with additional configuration
   */
  const windowWidth = width - padding * 2;
  const childWidth = (windowWidth - totalGapSize) / itemPerRow;

  return childWidth;
};
