import { type ReactNode, useMemo } from 'react';
import { Solid } from './solid.ts';
import { Stroke } from './stroke.ts';
import { Wave } from './wave.ts';

interface Props {
  width: number;
  height: number;
  color?: string;
  type: 'solid' | 'strike' | 'wave';
}

export function Pattern({ type, width, height, color = 'black' }: Props) {
  const typeToComponent = useMemo<Record<Props['type'], ReactNode | string>>(
    () => ({
      strike: <Stroke width={width} height={height} />,
      wave: <Wave width={width} height={height} />,
      solid: <Solid width={width} height={height} color={color} />,
    }),
    [color, height, width],
  );

  return typeToComponent[type];
}
