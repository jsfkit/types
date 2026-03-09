/**
 * A calculated field definition in a pivot table. Calculated fields derive their values from a
 * formula that references other cache fields (OOXML `<calculatedField>` in `<calculatedFields>`,
 * a Microsoft extension to `CT_pivotTableDefinition`).
 *
 * @group PivotTables
 */
export type PivotCalculatedField = {
  /** The name of the calculated field. */
  name: string;
  /** The formula expression that computes this field's values from other cache fields. */
  formula: string;
};
