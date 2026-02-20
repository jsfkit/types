import type { AdjCoordinate } from './AdjCoordinate.ts';

/**
 * Shape text margin rectangle.
 *
 * Defines the inset rectangle within a shape where text should be positioned,
 * specified using adjustable coordinates relative to the shape's geometry.
 */
export type ShapeRect = {
  /** Top edge inset from shape bounds. */
  t: AdjCoordinate;

  /** Left edge inset from shape bounds. */
  l: AdjCoordinate;

  /** Bottom edge inset from shape bounds. */
  b: AdjCoordinate;

  /** Right edge inset from shape bounds. */
  r: AdjCoordinate;
};
