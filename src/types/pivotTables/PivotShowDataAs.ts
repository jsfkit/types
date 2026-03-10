// The first 9 values ('normal' through 'index') are from the ECMA-376 ST_ShowDataAs
// enumeration and are written as the showDataAs attribute on CT_DataField.
//
// The remaining values ('percentOfParentRow', 'percentOfParentCol', 'percentOfParent',
// 'percentOfRunningTotal', 'rankAscending', 'rankDescending') are from the [MS-XLSX]
// ST_PivotShowAs enumeration and are written as the pivotShowAs attribute on the
// x14:dataField extension element (x14 is the conventional prefix for the
// http://schemas.microsoft.com/office/spreadsheetml/2009/9/main namespace).
//
// Converters to/from XLSX are expected to handle this XML-level distinction.

/**
 * Controls how a data field's values are displayed relative to other values. For example,
 * `'percentOfTotal'` displays each value as a percentage of the grand total.
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
