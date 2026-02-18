import type { GfxBitmap } from './GfxBitmap.ts';
import type { GfxChart } from './GfxChart.ts';
import type { GfxCnxShape } from './GfxCnxShape.ts';
import type { GfxGroup } from './GfxGroup.ts';
import type { GfxShape } from './GfxShape.ts';

/** A graphic element.  */
export type GfxObject =
  GfxChart |
  GfxBitmap |
  GfxShape |
  GfxCnxShape |
  GfxGroup;
