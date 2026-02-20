import type { PositiveCoordinate } from './PositiveCoordinate.ts';

/**
 * Describes the length and width properties for how far drawing element should extend, in EMUs.
 */
export type Extent = {
  /** Horizontal size (X-axis). */
  cx: PositiveCoordinate,

  /** Vertical size (Y-axis). */
  cy: PositiveCoordinate
};
