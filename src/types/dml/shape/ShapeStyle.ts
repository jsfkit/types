import type { Color } from '../../styles/Color.ts';
import type { FontStyleIndex } from './FontStyleIndex.ts';

// This has been left in here for future updates but needs more work.
/**
 * @group Drawings
 */
export type ShapeStyle = {
  line?: { color: Color, index: number },
  fill?: { color: Color, index: number },
  effect?: { color: Color, index: number },
  font?: { color: Color, index: FontStyleIndex },
};
