import type { Shape } from '../dml/shape/Shape.ts';
import type { integer } from '../integer.ts';

/**
 * Settings for waterfall plots.
 *
 * @group Charts
 */
export type ChartLayoutWaterfall = {
  /**
   * Space between columns, as a percentage of the column width (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapWidth?: integer;

  /**
   * Whether lines connect the end of each column to the start of the next.
   *
   * @default false
   */
  showConnectorLines?: boolean;

  /**
   * Fill and outline of the columns that increase the running total. Excel shows this as the
   * "Increase" legend entry. When absent, the look is automatic.
   */
  increase?: Shape;

  /**
   * Fill and outline of the columns that decrease the running total ("Decrease").
   */
  decrease?: Shape;

  /**
   * Fill and outline of the total and subtotal columns ("Total").
   */
  total?: Shape;
};
