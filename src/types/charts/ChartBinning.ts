import type { integer } from '../integer.ts';
import type { ChartNumericBinning } from './ChartNumericBinning.ts';

/**
 * How a `bin` transform divides values into bins.
 *
 * @group Charts
 */
export type ChartBinning = ChartNumericBinning & {
  /** Excel's automatic binning. */
  type: 'auto';
} | ChartNumericBinning & {
  type: 'width';
  width: number;
} | ChartNumericBinning & {
  type: 'count';
  count: integer;
} | {
  /** Each distinct category is its own bin. */
  type: 'category';
  /** The field holding each record's category. */
  categoryField: string;
};
