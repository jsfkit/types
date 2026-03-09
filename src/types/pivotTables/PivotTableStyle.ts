/**
 * Presentation style settings for a pivot table.
 *
 * @group PivotTables
 */
export type PivotTableStyle = {
  /** The name of the pivot table style (e.g. `"PivotStyleMedium9"`). */
  name?: string;
  /**
   * Whether row header formatting should be applied.
   *
   * @default false
   */
  showRowHeaders?: boolean;
  /**
   * Whether column header formatting should be applied.
   *
   * Named `showColHeaders` (not `showColumnHeaders`) to match the OOXML
   * `pivotTableStyleInfo@showColHeaders` attribute name; cf. `showColumnStripes` in
   * {@link TableStyle} which matches `tableStyleInfo@showColumnStripes`.
   *
   * @default false
   */
  showColHeaders?: boolean;
  /**
   * Whether row stripe formatting should be applied.
   *
   * @default false
   */
  showRowStripes?: boolean;
  /**
   * Whether column stripe formatting should be applied.
   *
   * Named `showColStripes` (not `showColumnStripes`) to match the OOXML
   * `pivotTableStyleInfo@showColStripes` attribute name; cf. `showColumnStripes` in
   * {@link TableStyle} which matches `tableStyleInfo@showColumnStripes`.
   *
   * @default false
   */
  showColStripes?: boolean;
  /**
   * Whether the last column's formatting from the named style is applied to the grand total column.
   *
   * @default false
   */
  showLastColumn?: boolean;
};
