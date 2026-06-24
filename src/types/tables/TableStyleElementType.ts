/**
 * The region of a table or pivot table that a {@link TableStyleElement} applies to.
 *
 * Some regions only occur in tables (e.g. `totalRow`), others only in pivot tables (e.g.
 * `pageFieldLabels`, the subheading and subtotal regions); a style definition usable for
 * both kinds of table may include elements for both.
 *
 * The `Kind` column below indicates which kind of table each region applies to.
 *
 * | Value                    | Kind  | Region
 * |--------------------------|-------|-----------------------------------------------------------
 * | `wholeTable`             | both  | The entire table.
 * | `headerRow`              | both  | The header row.
 * | `totalRow`               | table | The totals row.
 * | `firstColumn`            | both  | The first column.
 * | `lastColumn`             | both  | The last column.
 * | `firstRowStripe`         | both  | Odd row stripes (the first, third, … band of rows).
 * | `secondRowStripe`        | both  | Even row stripes (the second, fourth, … band of rows).
 * | `firstColumnStripe`      | both  | Odd column stripes (the first, third, … band of columns).
 * | `secondColumnStripe`     | both  | Even column stripes (the second, fourth, … band of columns).
 * | `firstHeaderCell`        | table | The first cell of the header row.
 * | `lastHeaderCell`         | table | The last cell of the header row.
 * | `firstTotalCell`         | table | The first cell of the totals row.
 * | `lastTotalCell`          | table | The last cell of the totals row.
 * | `firstSubtotalColumn`    | pivot | First-level subtotal columns.
 * | `secondSubtotalColumn`   | pivot | Second-level subtotal columns.
 * | `thirdSubtotalColumn`    | pivot | Third-level subtotal columns.
 * | `firstSubtotalRow`       | pivot | First-level subtotal rows.
 * | `secondSubtotalRow`      | pivot | Second-level subtotal rows.
 * | `thirdSubtotalRow`       | pivot | Third-level subtotal rows.
 * | `blankRow`               | pivot | Blank rows.
 * | `firstColumnSubheading`  | pivot | First-level column subheadings.
 * | `secondColumnSubheading` | pivot | Second-level column subheadings.
 * | `thirdColumnSubheading`  | pivot | Third-level column subheadings.
 * | `firstRowSubheading`     | pivot | First-level row subheadings.
 * | `secondRowSubheading`    | pivot | Second-level row subheadings.
 * | `thirdRowSubheading`     | pivot | Third-level row subheadings.
 * | `pageFieldLabels`        | pivot | Page field label cells (the filter-field name cells).
 * | `pageFieldValues`        | pivot | Page field value cells (the filter-field selection cells).
 *
 * @group Workbooks
 */
export type TableStyleElementType =
  'wholeTable' |
  'headerRow' |
  'totalRow' |
  'firstColumn' |
  'lastColumn' |
  'firstRowStripe' |
  'secondRowStripe' |
  'firstColumnStripe' |
  'secondColumnStripe' |
  'firstHeaderCell' |
  'lastHeaderCell' |
  'firstTotalCell' |
  'lastTotalCell' |
  'firstSubtotalColumn' |
  'secondSubtotalColumn' |
  'thirdSubtotalColumn' |
  'firstSubtotalRow' |
  'secondSubtotalRow' |
  'thirdSubtotalRow' |
  'blankRow' |
  'firstColumnSubheading' |
  'secondColumnSubheading' |
  'thirdColumnSubheading' |
  'firstRowSubheading' |
  'secondRowSubheading' |
  'thirdRowSubheading' |
  'pageFieldLabels' |
  'pageFieldValues';
