import type { integer } from '../integer.ts';

/**
 * Settings for bubble plots.
 *
 * @group Charts
 */
export type ChartLayoutBubble = {
  /**
   * Bubble size relative to the default size, as a percentage (0-300).
   *
   * @min 0
   * @max 300
   * @default 100
   */
  scale?: integer;

  /**
   * Whether the bubble value maps to the bubble's area or its width.
   *
   * @default "area"
   */
  sizeRepresents?: 'area' | 'width';

  /**
   * Whether bubbles with negative sizes are shown.
   *
   * @default true
   */
  showNegative?: boolean;

  // This is OOXML `c:bubble3D`.
  /**
   * Whether bubbles are shaded to look like spheres. A series or point can override this.
   *
   * @default false
   */
  shaded?: boolean;
};
