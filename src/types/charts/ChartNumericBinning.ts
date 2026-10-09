/**
 * Settings shared by numeric binning methods.
 *
 * @group Charts
 */
export type ChartNumericBinning = {
  /**
   * Values above this go into an overflow bin. `auto` lets the application choose the threshold.
   * When absent, there's no overflow bin.
   */
  overflow?: number | 'auto';
  /**
   * Values below this go into an underflow bin. `auto` lets the application choose the threshold.
   * When absent, there's no underflow bin.
   */
  underflow?: number | 'auto';
  /**
   * Which end of each bin interval is closed (inclusive).
   *
   * @default "right"
   */
  intervalClosed?: 'left' | 'right';
};
