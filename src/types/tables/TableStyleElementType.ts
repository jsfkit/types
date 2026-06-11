/**
 * The region of a table or pivot table that a {@link TableStyleElement} applies to.
 *
 * The values correspond to OOXML's `ST_TableStyleType`. Some regions only occur in tables
 * (e.g. `totalRow`), others only in pivot tables (e.g. `pageFieldLabels`, the subheading and
 * subtotal regions); a style definition usable for both kinds of table may include elements
 * for both.
 *
 * @group Workbooks
 */
export type TableStyleElementType =
  /** The entire table. */
  'wholeTable' |
  /** The header row. */
  'headerRow' |
  /** The totals row. */
  'totalRow' |
  /** The first column. */
  'firstColumn' |
  /** The last column. */
  'lastColumn' |
  /** Odd row stripes (the first, third, ... band of rows). */
  'firstRowStripe' |
  /** Even row stripes (the second, fourth, ... band of rows). */
  'secondRowStripe' |
  /** Odd column stripes (the first, third, ... band of columns). */
  'firstColumnStripe' |
  /** Even column stripes (the second, fourth, ... band of columns). */
  'secondColumnStripe' |
  /** The first cell of the header row. */
  'firstHeaderCell' |
  /** The last cell of the header row. */
  'lastHeaderCell' |
  /** The first cell of the totals row. */
  'firstTotalCell' |
  /** The last cell of the totals row. */
  'lastTotalCell' |
  /** A pivot table's first-level subtotal columns. */
  'firstSubtotalColumn' |
  /** A pivot table's second-level subtotal columns. */
  'secondSubtotalColumn' |
  /** A pivot table's third-level subtotal columns. */
  'thirdSubtotalColumn' |
  /** A pivot table's first-level subtotal rows. */
  'firstSubtotalRow' |
  /** A pivot table's second-level subtotal rows. */
  'secondSubtotalRow' |
  /** A pivot table's third-level subtotal rows. */
  'thirdSubtotalRow' |
  /** A pivot table's blank rows. */
  'blankRow' |
  /** A pivot table's first-level column subheadings. */
  'firstColumnSubheading' |
  /** A pivot table's second-level column subheadings. */
  'secondColumnSubheading' |
  /** A pivot table's third-level column subheadings. */
  'thirdColumnSubheading' |
  /** A pivot table's first-level row subheadings. */
  'firstRowSubheading' |
  /** A pivot table's second-level row subheadings. */
  'secondRowSubheading' |
  /** A pivot table's third-level row subheadings. */
  'thirdRowSubheading' |
  /** A pivot table's page field label cells (the filter-field name cells). */
  'pageFieldLabels' |
  /** A pivot table's page field value cells (the filter-field selection cells). */
  'pageFieldValues';
