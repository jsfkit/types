import type { Shape } from '../dml/shape/Shape.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * A data table shown below the plot area, listing each series' values.
 *
 * @group Charts
 */
export type ChartDataTable = {
  /**
   * Whether horizontal borders are drawn between the table's rows: one row for each series.
   *
   * @default true
   */
  showHorzBorder?: boolean;
  /**
   * Whether vertical borders are drawn between the table's columns: one column for each category.
   *
   * @default true
   */
  showVertBorder?: boolean;
  /**
   * Whether a border is drawn around the whole table.
   *
   * @default true
   */
  showOutline?: boolean;
  /**
   * Whether legend keys are shown next to the series names.
   *
   * @default false
   */
  showKeys?: boolean;
  /**
   * Fill and borders of the data table. By default, it has no fill and 0.75pt `tx1` 15%/85%
   * borders.
   */
  shape?: Shape;
  /**
   * Text style of the data table. By default, it's 9pt `tx1` 65%/35% in the minor font. See
   * {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;
};
