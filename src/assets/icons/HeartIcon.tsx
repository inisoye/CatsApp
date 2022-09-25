import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HeartIconProps {
  color: string;
  size: number;
}

export const HeartIcon: React.FunctionComponent<HeartIconProps> = ({
  color,
  size,
}) => {
  return (
    <Svg
      viewBox="0 0 26 26"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M23.077 4.994a5.959 5.959 0 0 0-8.429 0L13.5 6.143l-1.148-1.149a5.96 5.96 0 0 0-8.429 8.428l1.149 1.149 8.428 8.428 8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428Z"
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
