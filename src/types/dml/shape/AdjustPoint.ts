import type { AdjustCoordinate } from './AdjustCoordinate.ts';

/**
 * Represents a point that can be adjusted in a shape. Each coordinate (x and y) can be defined as
 * an {@link AdjustCoordinate}, which allows for flexible positioning based on the shape's
 * dimensions and other factors.
 *
 * @group Drawings
 */
export type AdjustPoint = {
  x: AdjustCoordinate,
  y: AdjustCoordinate
};
