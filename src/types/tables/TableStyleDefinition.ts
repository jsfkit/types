import type { TableStyleElement } from './TableStyleElement.ts';

/**
 * A workbook-defined (custom) style for tables and/or pivot tables.
 *
 * Definitions live in {@link Workbook.tableStyles} and are referenced by name from
 * {@link TableStyle.name} and {@link PivotTableStyle.name}, the same way built-in style
 * names are referenced.
 *
 * A definition only describes the regions it lists; regions without an element get no
 * formatting from the style. Regions overlap (e.g. a header-row cell is also part of the
 * whole table), in which case the more specific region's formatting wins, property by
 * property.
 *
 * @group Workbooks
 */
export type TableStyleDefinition = {
  /**
   * The name of the style, as referenced from tables and pivot tables. Must match the
   * definition's key in {@link Workbook.tableStyles}.
   */
  name: string;
  /**
   * Whether this style may be applied to pivot tables, regular tables, or both.
   *
   * @default "all"
   */
  table?: 'table' | 'pivot' | 'all';
  /** The formatting of each table region that this style defines. */
  elements?: TableStyleElement[];
};
