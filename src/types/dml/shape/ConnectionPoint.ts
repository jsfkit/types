import type { AdjPoint } from './AdjPoint.ts';
import type { Angle } from '../Angle.ts';
import type { GeomGuideName } from './GeomGuideName.ts';

/**
 * Defines a connection point on a shape where other shapes can connect.
 * Connection points are used for connecting shapes with connectors/lines in diagrams.
 */
export type ConnectionPoint = {
  /** The position of the connection point on the shape */
  pos: AdjPoint,

  /**
   * The angle of the connection point, either as a specific angle or a reference
   * to a geometry guide
   */
  ang?: Angle | GeomGuideName,
};
