import type { GraphicBitmap } from './GraphicBitmap.ts';
import type { GraphicChart } from './GraphicChart.ts';
import type { GraphicConnectionShape } from './GraphicConnectionShape.ts';
import type { GraphicGroup } from './GraphicGroup.ts';
import type { GraphicShape } from './GraphicShape.ts';

/** A graphic element.  */
export type Graphic =
  GraphicChart |
  GraphicBitmap |
  GraphicShape |
  GraphicConnectionShape |
  GraphicGroup;
