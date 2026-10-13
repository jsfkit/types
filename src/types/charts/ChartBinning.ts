import type { integer } from '../integer.ts';

/**
 * Settings shared by the methods of binning by value.
 *
 * @group Charts
 */
export type ChartNumericBinning = {
  /**
   * Values above this go into an overflow bin, and the regular bins stop here. `auto` lets the
   * application choose the threshold. When absent, there's no overflow bin.
   */
  overflow?: number | 'auto';
  /**
   * Values below this go into an underflow bin, and the regular bins start here. `auto` lets the
   * application choose the threshold. When absent, there's no underflow bin, and the regular bins
   * start at the smallest value.
   */
  underflow?: number | 'auto';
  /**
   * Which end of each bin interval is closed (inclusive).
   *
   * @default "right"
   */
  intervalClosed?: 'left' | 'right';
};

/**
 * How a `bin` transform divides values into bins.
 *
 * @group Charts
 */
export type ChartBinning = (ChartNumericBinning & {
  /**
   * The application chooses the bins, as Excel's automatic binning does.
   */
  type: 'auto';
}) | (ChartNumericBinning & {
  /**
   * Bins of a fixed width.
   */
  type: 'width';
  /**
   * The width of each bin, in the units of the binned values. The bins run on past the largest
   * value, so the last bin can end beyond it, but they stop at an overflow threshold, where the
   * last bin can be narrower.
   */
  width: number;
}) | (ChartNumericBinning & {
  /**
   * A fixed number of bins, of equal width.
   */
  type: 'count';
  /**
   * The number of bins, including the underflow and overflow bins. The regular bins divide the
   * range between the thresholds, or between the smallest and largest values, evenly.
   */
  count: integer;
}) | {
  /**
   * Each distinct category is its own bin.
   */
  type: 'category';
  /**
   * The field holding each record's category.
   */
  categoryField: string;
};
