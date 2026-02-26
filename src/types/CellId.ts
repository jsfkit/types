/**
 * A cell coordinate in an uppercase A1-style reference format (e.g. `AG14`).
 *
 * The lower top-left bounds of the reference are A1-inclusive, and the upper bottom-right bound are
 * `XFD1048576` inclusive.
 *
 * @pattern ^[A-Z]{1,3}[0-9]{1,7}$
 * @group Workbooks
 */
export type CellId = string;
