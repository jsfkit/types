import type { AdjustPoint } from './AdjustPoint.ts';
import type { DmlAngle } from '../DmlAngle.ts';
import type { GeomGuideName } from './GeomGuideName.ts';

/**
 * Defines a connection point on a shape where other shapes can connect.
 * Connection points are used for connecting shapes with connectors/lines in diagrams.
 *
 * @group Drawings
 */
export type ConnectionPoint = {
  /** The position of the connection point on the shape */
  pos: AdjustPoint,

  /**
   * The angle of the connection point, either as a specific angle or a reference
   * to a geometry guide
   */
  ang?: DmlAngle | GeomGuideName,
};
