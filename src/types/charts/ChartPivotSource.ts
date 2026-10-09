/**
 * Identifies a pivot table in the workbook by its name and sheet, matching
 * `PivotTable.name` and `PivotTable.sheet`.
 *
 * @group Charts
 */
export type ChartPivotSource = {
  name: string;
  sheet: string;
};
