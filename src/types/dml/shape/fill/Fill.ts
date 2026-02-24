import type { BlipFill } from './BlipFill.ts';
import type { GradientLinearFill } from './GradientLinearFill.ts';
import type { GradientPathFill } from './GradientPathFill.ts';
import type { GroupFill } from './GroupFill.ts';
import type { NoFill } from './NoFill.ts';
import type { PatternFill } from './PatternFill.ts';
import type { SolidFill } from './SolidFill.ts';

export type Fill =
  PatternFill |
  SolidFill |
  GradientLinearFill |
  GradientPathFill |
  GroupFill |
  NoFill |
  BlipFill;
