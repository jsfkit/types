import type { ChartCategoryScaleBase } from './ChartCategoryScaleBase.ts';
import type { ChartScaleBase } from './ChartScaleBase.ts';
import type { ChartTimeUnit } from './ChartTimeUnit.ts';

/**
 * A date scale. Values are date serial numbers.
 *
 * @group Charts
 */
export type ChartTimeScale = ChartScaleBase & ChartCategoryScaleBase & {
  type: 'time';

  /**
   * Whether dates are placed in bands (Excel's "Between tick marks") or on points ("On tick
   * marks"), as with `band` and `point` scales. OOXML stores this as `c:crossBetween` on the value
   * axis that crosses this one.
   *
   * @default "band"
   */
  placement?: 'band' | 'point';

  /** Fixed minimum, as a date serial number. When absent, the minimum is automatic. */
  min?: number;

  /** Fixed maximum, as a date serial number. When absent, the maximum is automatic. */
  max?: number;

  /** Smallest time unit that the data is grouped by. When absent, it's automatic. */
  baseUnit?: ChartTimeUnit;

  /**
   * Interval between major ticks, in `majorTimeUnit`. When absent, the interval is automatic.
   */
  majorUnit?: number;
  /** The unit of `majorUnit`. When absent, it's automatic. */
  majorTimeUnit?: ChartTimeUnit;

  /**
   * Interval between minor ticks, in `minorTimeUnit`. When absent, the interval is automatic.
   */
  minorUnit?: number;
  /** The unit of `minorUnit`. When absent, it's automatic. */
  minorTimeUnit?: ChartTimeUnit;
};
