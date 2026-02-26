/**
 * A cell coordinate range in an uppercase A1-style reference format (e.g. `H6:J36`).
 *
 * The range consists of two {@link CellId | CellIds} separated by a colon (`:`) character.
 *
 * @pattern ^([A-Z]{1,3}[0-9]{1,7}):([A-Z]{1,3}[0-9]{1,7})$
 * @group Workbooks
 */
export type CellRange = string;
