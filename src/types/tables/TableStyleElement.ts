import type { integer } from '../integer.ts';
import type { Style } from '../styles/index.ts';
import type { TableStyleElementType } from './TableStyleElementType.ts';

/**
 * The formatting of one region of a table or pivot table, within a
 * {@link TableStyleDefinition}.
 *
 * @group Workbooks
 */
export type TableStyleElement = {
  /** The table region this element's formatting applies to. */
  type: TableStyleElementType;
  /**
   * The number of consecutive rows or columns in each stripe band. Only meaningful for the
   * four stripe element types.
   *
   * @default 1
   */
  size?: integer;
  /**
   * The formatting to overlay on the region's cells. Only the properties present apply;
   * everything else on a cell is left as-is (differential-format semantics). An element
   * without a style has no visual effect (a stripe element may still carry a meaningful
   * {@link size}).
   */
  style?: Style;
};
