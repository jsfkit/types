import type { Line } from '../dml/shape/line/Line.ts';

/**
 * Error bars on a series.
 *
 * @group Charts
 */
export type ChartErrorBars = {
  /**
   * Which values the error bars apply to. Only scatter and bubble charts have x error bars.
   *
   * @default "y"
   */
  direction?: 'x' | 'y';

  /**
   * @default "both"
   */
  barType?: 'both' | 'plus' | 'minus';

  /**
   * How the error amount is calculated.
   *
   * | Value               | Amount
   * |---------------------|------------------------------------------------------
   * | `fixed`             | `value`, for every point.
   * | `percentage`        | `value` percent of each point's value.
   * | `standardDeviation` | `value` standard deviations of the series.
   * | `standardError`     | The standard error of the series.
   * | `custom`            | Per point, from the `plusField` and `minusField` fields.
   */
  valueType: 'fixed' | 'percentage' | 'standardDeviation' | 'standardError' | 'custom';

  /**
   * The amount for `fixed`, `percentage`, and `standardDeviation`. Not used by the other types.
   */
  value?: number;

  /**
   * Dataset field holding the plus amounts, when `valueType` is `custom`.
   */
  plusField?: string;

  /**
   * Dataset field holding the minus amounts, when `valueType` is `custom`.
   */
  minusField?: string;

  // This is the inverse of OOXML `c:noEndCap`.
  /**
   * Whether the error bars have end caps.
   *
   * @default true
   */
  endCaps?: boolean;

  /**
   * Style of the error bars. By default, they're 0.75pt `tx1` 65%/35%.
   */
  line?: Line;
};
