import type { AdjPoint } from './AdjPoint.ts';
import type { Coordinate } from '../Coordinate.ts';
import type { GeomGuideName } from './GeomGuideName.ts';

/**
 * XY adjustment handle for custom shapes.
 *
 * Defines an interactive handle that can be dragged to adjust shape geometry
 * using Cartesian coordinates (X and Y positions).
 */
export type AdjustValueHandleXY = {
  /** Type discriminator for XY adjustment handles. */
  type: 'xy',

  /** Name of the guide that this handle adjusts for the X axis. */
  gdRefX?: GeomGuideName,

  /** Maximum X coordinate value allowed for this handle (as coordinate or reference to guide). */
  maxX?: GeomGuideName | Coordinate,

  /** Minimum X coordinate value allowed for this handle (as coordinate or reference to guide). */
  minX?: GeomGuideName | Coordinate,

  /** Name of the guide that this handle adjusts for the Y axis. */
  gdRefY?: GeomGuideName,

  /** Maximum Y coordinate value allowed for this handle (as coordinate or reference to guide). */
  maxY?: GeomGuideName | Coordinate,

  /** Minimum Y coordinate value allowed for this handle (as coordinate or reference to guide). */
  minY?: GeomGuideName | Coordinate,

  /** Position of the adjustment handle in the shape's coordinate system. */
  pos: AdjPoint,
};
