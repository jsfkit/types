import type { AdjPoint } from './AdjPoint.ts';
import type { Angle } from '../Angle.ts';
import type { GeomGuideName } from './GeomGuideName.ts';

export type ConnectionPoint = {
  pos: AdjPoint,
  ang?: Angle | GeomGuideName,
};
