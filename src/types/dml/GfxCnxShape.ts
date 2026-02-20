import type { ShapeProperties, TextBody } from './shape/index.ts';
import type { Xfrm } from './Xfrm.ts';

/**
 * Connection shape (connector).
 *
 * Represents a connector or line shape that connects two other shapes,
 * typically used for creating diagrams, flowcharts, and organizational charts.
 */
export type GfxCnxShape = {
  /** Type discriminator for connection shapes. */
  type: 'connectionShape',

  /** Unique identifier for this connection shape. */
  id: string,

  /** Display name of the connection shape. */
  name: string,

  /** Visual styling properties (line style, color, effects, etc.). */
  shape?: ShapeProperties,

  /** 2D transformation (position, rotation, scale). */
  xfrm?: Xfrm,

  /** Optional text content displayed on or near the connector. */
  text?: TextBody,
};
