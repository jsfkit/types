import type { FillBlip } from './FillBlip.ts';
import type { FillGradientLinear } from './FillGradientLinear.ts';
import type { FillGradientPath } from './FillGradientPath.ts';
import type { FillGroup } from './FillGroup.ts';
import type { FillNone } from './FillNone.ts';
import type { FillPattern } from './FillPattern.ts';
import type { FillSolid } from './FillSolid.ts';

export type Fill =
  FillPattern |
  FillSolid |
  FillGradientLinear |
  FillGradientPath |
  FillGroup |
  FillNone |
  FillBlip;
