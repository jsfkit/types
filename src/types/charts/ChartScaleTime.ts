import type { ChartScaleBase } from './ChartScaleBase.ts';
import type { ChartTimeUnit } from './ChartTimeUnit.ts';

/**
 * A date scale. Values are date serial numbers.
 *
 * @group Charts
 */
export type ChartScaleTime = ChartScaleBase & {
  /**
   * Dates placed by their value.
   */
  type: 'time';

  // This is OOXML `c:auto`.
  /**
   * Whether the scale type was chosen automatically from the data. This is Excel's "Automatically
   * select based on data" axis type.
   *
   * The scale's `type` is always the type currently in effect, so a renderer uses it as it is.
   * When `auto` is `true`, an application that changes the data chooses the type again: a
   * `time` scale when the category values are dates, otherwise a `band` or `point` scale. When
   * it's `false`, the type is fixed, like Excel's "Text axis" and "Date axis" choices.
   *
   * @default false
   */
  auto?: boolean;

  // OOXML stores this as `c:crossBetween` on the value axis that crosses this one.
  /**
   * Whether dates are placed in bands (Excel's "Between tick marks") or on points ("On tick
   * marks"), as with `band` and `point` scales.
   *
   * @default "band"
   */
  placement?: 'band' | 'point';

  /**
   * Fixed minimum, as a date serial number. When absent, the minimum is automatic.
   */
  min?: number;

  /**
   * Fixed maximum, as a date serial number. When absent, the maximum is automatic.
   */
  max?: number;

  /**
   * Smallest time unit that the data is grouped by. When absent, it's automatic.
   */
  baseUnit?: ChartTimeUnit;

  /**
   * Interval between major ticks, in `majorTimeUnit`. When absent, the interval is automatic.
   */
  majorUnit?: number;
  /**
   * The unit of `majorUnit`. When absent, it's automatic.
   */
  majorTimeUnit?: ChartTimeUnit;

  /**
   * Interval between minor ticks, in `minorTimeUnit`. When absent, the interval is automatic.
   */
  minorUnit?: number;
  /**
   * The unit of `minorUnit`. When absent, it's automatic.
   */
  minorTimeUnit?: ChartTimeUnit;
};
