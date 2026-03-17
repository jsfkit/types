/**
 * A defined name in an external workbook.
 *
 * @see {@link DefinedName}
 * @group Workbooks
 */
export type ExternalDefinedName = {
  /**
   * A case-sensitive name. Names must start with a letter or `_`, and may only be made up of
   * letters as well as `\`, `_`, `.`, or `?`. Names must be a valid A1 or R1C1 reference.
   */
  name: string;
  /**
   * A formula expression, a reference, or value. Whatever the value is will be evaluated by a
   * spreadsheet engine as if it were an expression.
   */
  value?: string;
  /**
   * An optional worksheet name that defines the scope for this name. When this field is absent,
   * the defined name should be considered to be scoped to the workbook.
   */
  scope?: string;
};
