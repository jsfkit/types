import type { FontStyleIndex } from './FontStyleIndex.ts';

export type ShapeStyle = {
  line?: { color: string, index: number },
  fill?: { color: string, index: number },
  effect?: { color: string, index: number },
  font?: { color: string, index: FontStyleIndex },
};
