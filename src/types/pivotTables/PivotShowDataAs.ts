/**
 * Controls how a data field's values are displayed relative to other values. For example,
 * `'percentOfTotal'` displays each value as a percentage of the grand total.
 *
 * The first 9 values (`'normal'` through `'index'`) are the standard set. The remaining values
 * (`'percentOfParentRow'` through `'rankDescending'`) are
 * {@link https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/2c5dee00-eff2-4b22-92b6-0738acd4475e | [MS-XLSX]}
 * extensions.
 *
 * @group PivotTables
 */
export type PivotShowDataAs =
  'normal' |
  'difference' |
  'percent' |
  'percentDiff' |
  'runTotal' |
  'percentOfRow' |
  'percentOfCol' |
  'percentOfTotal' |
  'index' |
  'percentOfParentRow' |
  'percentOfParentCol' |
  'percentOfParent' |
  'percentOfRunningTotal' |
  'rankAscending' |
  'rankDescending';
