import type { ChartScaleBase } from './ChartScaleBase.ts';

/**
 * A scale for continuous numbers, linear or logarithmic.
 *
 * @group Charts
 */
export type ChartContinuousScale = ChartScaleBase & {
  type: 'linear' | 'log';

  /**
   * Fixed minimum. When absent, the minimum is automatic.
   */
  min?: number;

  /**
   * Fixed maximum. When absent, the maximum is automatic.
   */
  max?: number;

  /**
   * Interval between major ticks and gridlines. When absent, the interval is automatic.
   */
  majorUnit?: number;

  /**
   * Interval between minor ticks and gridlines. When absent, the interval is automatic.
   */
  minorUnit?: number;

  /**
   * Base of a logarithmic scale.
   *
   * @default 10
   */
  logBase?: number;
};
