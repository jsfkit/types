import type { AdjustPoint } from './AdjustPoint.ts';
import type { EmuValue } from '../EmuValue.ts';
import type { GeomGuideName } from './GeomGuideName.ts';

/**
 * XY adjustment handle for custom shapes.
 *
 * Defines an interactive handle that can be dragged to adjust shape geometry
 * using Cartesian coordinates (X and Y positions).
 *
 * @group Drawings
 */
export type AdjustValueHandleXY = {
  /** Type discriminator for XY adjustment handles. */
  type: 'xy',

  /** Name of the guide that this handle adjusts for the X axis. */
  gdRefX?: GeomGuideName,

  /** Maximum X coordinate value allowed for this handle (as coordinate or reference to guide). */
  maxX?: GeomGuideName | EmuValue,

  /** Minimum X coordinate value allowed for this handle (as coordinate or reference to guide). */
  minX?: GeomGuideName | EmuValue,

  /** Name of the guide that this handle adjusts for the Y axis. */
  gdRefY?: GeomGuideName,

  /** Maximum Y coordinate value allowed for this handle (as coordinate or reference to guide). */
  maxY?: GeomGuideName | EmuValue,

  /** Minimum Y coordinate value allowed for this handle (as coordinate or reference to guide). */
  minY?: GeomGuideName | EmuValue,

  /** Position of the adjustment handle in the shape's coordinate system. */
  pos: AdjustPoint,
};
