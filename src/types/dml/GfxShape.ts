import type { ShapeProperties } from './shape/index.ts';
import type { Xfrm } from './Xfrm.ts';
import type { TextBody } from './shape/text/index.ts';

/**
 * Basic shape object.
 *
 * Represents a standard geometric shape (rectangle, circle, arrow, etc.)
 * with customizable geometry, styling, and text content.
 */
export type GfxShape = {
  /** Type discriminator for basic shapes. */
  type: 'shape',

  /** Unique identifier for this shape. */
  id: string,

  /** Display name of the shape. */
  name: string,

  /** 2D transformation (position, rotation, scale). */
  xfrm?: Xfrm,

  /** Visual styling properties (fill, line, effects, geometry preset, etc.). */
  shape?: ShapeProperties,

  /** Optional text content displayed within the shape. */
  text?: TextBody,
};
