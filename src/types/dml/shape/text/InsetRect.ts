import type { Coordinate } from '../../Coordinate.ts';

/**
 * Defines an inset or internal margins for a text box within a shape.
 */
export type InsetRect = {
  /**
   * Top edge inset from shape bounds in EMUs.
   * @defaultValue 45720
   */
  t?: Coordinate;

  /**
   * Left edge inset from shape bounds in EMUs.
   * @defaultValue 91440
   */
  l?: Coordinate;

  /**
   * Bottom edge inset from shape bounds in EMUs.
   * @defaultValue 45720
   */
  b?: Coordinate;

  /**
   * Right edge inset from shape bounds in EMUs.
   * @defaultValue 91440
   */
  r?: Coordinate;
};
