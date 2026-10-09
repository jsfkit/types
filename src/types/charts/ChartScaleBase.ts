import type { ChartScaleDomain } from './ChartScaleDomain.ts';

/**
 * Properties shared by every scale.
 *
 * @group Charts
 */
export type ChartScaleBase = {
  id: string;
  /** The values the scale covers. When absent, they come from the data that uses the scale. */
  domain?: ChartScaleDomain;
  /**
   * Whether the scale runs in reverse, for example values from top to bottom.
   *
   * @default false
   */
  reverse?: boolean;
};
