import type { TableStyleName } from './TableStyleName.ts';

/**
 * Describes which style is used to display this table, and specifies which portions of the table
 * have which styles applied.
 *
 * @group Workbooks
 */
export type TableStyle = {
  /**
   * The name of the table style to use with this table.
   *
   * If the value is null or omitted the table should not be rendered with any special styling (note
   * that this only applies if the style object itself is present).
   * @default null
   */
  name?: TableStyleName | null;
  /**
   * Whether row stripe formatting should be applied.
   *
   * @default true
   */
  showRowStripes?: boolean;
  /**
   * Whether column stripe formatting should be applied.
   *
   * @default false
   */
  showColumnStripes?: boolean;
  /**
   * Whether the first (leftmost) column in the table should be highlighted.
   *
   * @default false
   */
  showFirstColumn?: boolean;
  /**
   * Whether the last (rightmost) column in the table should be highlighted.
   *
   * @default false
   */
  showLastColumn?: boolean;
};
