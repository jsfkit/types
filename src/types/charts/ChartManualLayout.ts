import type { ChartLayoutMode } from './ChartLayoutMode.ts';

/**
 * A manually set position and size for a chart element, such as a title, legend, data label, or
 * the plot area.
 *
 * All values are fractions of the chart area's width (`x`, `w`) or height (`y`, `h`), where 1 is
 * the full width or height. `factor`-mode offsets can be negative. These are Excel's own units,
 * kept so conversion is lossless.
 *
 * An absent coordinate is automatic. To place an element whose `x` or `y` is in `factor` mode, a
 * renderer first computes the element's automatic position, then applies the offset.
 *
 * @group Charts
 */
export type ChartManualLayout = {
  /** Horizontal position. See `xMode`. */
  x?: number;

  /** Vertical position. See `yMode`. */
  y?: number;

  /** Width, or right edge. See `wMode`. */
  w?: number;

  /** Height, or bottom edge. See `hMode`. */
  h?: number;

  /** @default "factor" */
  xMode?: ChartLayoutMode;

  /** @default "factor" */
  yMode?: ChartLayoutMode;

  /** @default "factor" */
  wMode?: ChartLayoutMode;

  /** @default "factor" */
  hMode?: ChartLayoutMode;
};
