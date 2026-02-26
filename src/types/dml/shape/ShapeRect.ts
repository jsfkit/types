import type { AdjustCoordinate } from './AdjustCoordinate.ts';

/**
 * Shape text margin rectangle.
 *
 * Defines the inset rectangle within a shape where text should be positioned,
 * specified using adjustable coordinates relative to the shape's geometry.
 *
 * @group Drawings
 */
export type ShapeRect = {
  /** Top edge inset from shape bounds. */
  t: AdjustCoordinate;

  /** Left edge inset from shape bounds. */
  l: AdjustCoordinate;

  /** Bottom edge inset from shape bounds. */
  b: AdjustCoordinate;

  /** Right edge inset from shape bounds. */
  r: AdjustCoordinate;
};
