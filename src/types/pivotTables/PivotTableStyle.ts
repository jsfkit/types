import type { LooseAutocomplete } from '../LooseAutocomplete.ts';
import type { PivotTableStyleName } from './PivotTableStyleName.ts';

/**
 * Presentation style settings for a pivot table.
 *
 * @group PivotTables
 */
export type PivotTableStyle = {
  /**
   * The name of the pivot table style: either one of the built-in style names
   * (e.g. `"PivotStyleMedium9"`, see {@link PivotTableStyleName}) or the name of a
   * workbook-defined style (see {@link Workbook.tableStyles}).
   *
   * If the value is null or omitted the table should not be rendered with any special styling (note
   * that this only applies if the style object itself is present). A name that is neither a
   * built-in style name nor defined in the workbook should be treated the same way.
   *
   * @default null
   */
  name?: LooseAutocomplete<PivotTableStyleName> | null;
  /**
   * Whether row header formatting should be applied.
   *
   * @default false
   */
  showRowHeaders?: boolean;
  /**
   * Whether column header formatting should be applied.
   *
   * @default false
   */
  showColumnHeaders?: boolean;
  /**
   * Whether row stripe formatting should be applied.
   *
   * @default false
   */
  showRowStripes?: boolean;
  /**
   * Whether column stripe formatting should be applied.
   *
   * @default false
   */
  showColumnStripes?: boolean;
  /**
   * Whether the last column's formatting from the named style is applied to the grand total column.
   *
   * @default false
   */
  showLastColumn?: boolean;
};
