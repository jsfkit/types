import type { AdjPoint } from './AdjPoint.ts';
import type { Angle } from '../Angle.js';
import type { GeomGuideName } from './GeomGuideName.js';

export type ConnectionPoint = {
  pos: AdjPoint,
  ang?: Angle | GeomGuideName,
};
