import { Colors } from '@tokens/colors';

export type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

export type Size = 'normal-text' | 'big-text';

export type MixinsMap<T extends Size, K> = {
  [key in T]: K;
};

export interface TypographyProps {
  as?: As;
  size: Size;
  color?: Colors;
}
