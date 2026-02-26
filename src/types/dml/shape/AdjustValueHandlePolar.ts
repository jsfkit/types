import type { AdjustPoint } from './AdjustPoint.ts';
import type { DmlAngle } from '../DmlAngle.ts';
import type { EmuValue } from '../EmuValue.ts';
import type { GeomGuideName } from './GeomGuideName.ts';

/**
 * Polar adjustment handle for custom shapes.
 *
 * Defines an interactive handle that can be dragged to adjust shape geometry
 * using polar coordinates (angle and radius from a center point).
 *
 * @group Drawings
 */
export type AdjustValueHandlePolar = {
  /** Type discriminator for polar adjustment handles. */
  type: 'polar',

  /** Name of the guide that this handle adjusts for angle. */
  gdRefAng?: GeomGuideName,

  /** Maximum angle value allowed for this handle (in degrees or reference to guide). */
  maxAng?: GeomGuideName | DmlAngle,

  /** Minimum angle value allowed for this handle (in degrees or reference to guide). */
  minAng?: GeomGuideName | DmlAngle,

  /** Name of the guide that this handle adjusts for radius. */
  gdRefR?: GeomGuideName,

  /** Maximum radius value allowed for this handle (in shape coordinates or reference to guide). */
  maxR?: GeomGuideName | EmuValue,

  /** Minimum radius value allowed for this handle (in shape coordinates or reference to guide). */
  minR?: GeomGuideName | EmuValue,

  /** Position of the adjustment handle in the shape's coordinate system. */
  pos: AdjustPoint,
};
