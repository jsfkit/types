import type { FontStyleIndex } from './FontStyleIndex.ts';

// This has been left in here for future updates but needs more work.
export type ShapeStyle = {
  line?: { color: string, index: number },
  fill?: { color: string, index: number },
  effect?: { color: string, index: number },
  font?: { color: string, index: FontStyleIndex },
};
