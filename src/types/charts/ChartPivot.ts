import type { ChartPivotFieldButtons } from './ChartPivotFieldButtons.ts';
import type { ChartPivotFormat } from './ChartPivotFormat.ts';

/**
 * The pivot table that a pivot chart plots, with the chart's pivot-specific settings.
 *
 * The pivot table is identified by its name and sheet, matching {@link PivotTable.name} and
 * {@link PivotTable.sheet}.
 *
 * @group Charts
 */
export type ChartPivot = {
  /**
   * The name of the pivot table, matching {@link PivotTable.name}.
   */
  name: string;

  /**
   * The sheet that holds the pivot table, matching {@link PivotTable.sheet}.
   */
  sheet: string;

  /**
   * Formatting for the chart's series and points, keyed by pivot items rather than by series
   * index, so it survives a pivot refresh. The field indexes in each format's area refer to the
   * fields of this pivot table.
   */
  formats?: ChartPivotFormat[];

  /**
   * Which field buttons the chart shows. When absent, it shows none.
   */
  fieldButtons?: ChartPivotFieldButtons;
};
