import type { CellRange } from '../CellRange.ts';
import type { integer } from '../integer.ts';
import type { PivotCache } from './PivotCache.ts';
import type { PivotCalculatedField } from './PivotCalculatedField.ts';
import type { PivotDataField } from './PivotDataField.ts';
import type { PivotField } from './PivotField.ts';
import type { PivotFilter } from './PivotFilter.ts';
import type { PivotPageField } from './PivotPageField.ts';
import type { PivotRowColItem } from './PivotRowColItem.ts';
import type { PivotTableLocation } from './PivotTableLocation.ts';
import type { PivotTableStyle } from './PivotTableStyle.ts';

/**
 * A pivot table definition. Pivot tables dynamically group, filter, and aggregate source data,
 * displaying the results in a structured layout on a worksheet.
 *
 * The layout is organized around **axes**: each {@link PivotField} can be placed on the row axis,
 * column axis, or page (filter) axis via its {@link PivotField.axis | axis} property.
 * {@link rowFieldIndices} and {@link colFieldIndices} list the fields on each axis in display
 * order; each position in that list is sometimes called a **level**. The page axis fields appear
 * in the **page field area**, a region above the pivot table body where filter dropdowns are
 * displayed (see {@link pageFields}).
 *
 * {@link rowItems} and {@link colItems} describe the rendered layout: each
 * {@link PivotRowColItem} represents one row or column header, with
 * {@link PivotRowColItem.itemIndices | itemIndices} mapping positionally to the fields on that
 * axis. The **data area** is the grid of aggregated values framed by those row and column
 * headers; its contents are defined by the {@link dataFields}.
 *
 * ```
 * +--------------------------------------------+
 * |        Page field area (filters)           |  pageFields
 * |        rowPageCount × colPageCount         |
 * +----------------+---------------------------+  firstHeaderRow
 * |                |     Column headers        |  colItems
 * |  Row headers   +---------------------------+  firstDataRow
 * |   (rowItems)   |        Data area          |
 * |                |       (dataFields)        |
 * +----------------+---------------------------+
 *                  ^ firstDataCol
 * ```
 *
 * {@link PivotTableLocation.firstHeaderRow | firstHeaderRow},
 * {@link PivotTableLocation.firstDataRow | firstDataRow}, and
 * {@link PivotTableLocation.firstDataCol | firstDataCol} locate these regions within the
 * output range ({@link ref}).
 *
 * @see {@link https://support.microsoft.com/office/a9a84538-bfe9-40a9-a8e9-f99134456576}
 *
 * @group PivotTables
 */
export type PivotTable = {
  /**
   * The name of the pivot table. Typically unique per workbook, but Excel allows duplicate names
   * across different sheets.
   */
  name: string;
  /** The name of the sheet where this pivot table's output is rendered. */
  sheet: string;
  /** The pivot cache that supplies source data for this pivot table. */
  cache: PivotCache;
  /** The A1-style range reference covering the pivot table's output area. */
  ref: CellRange;
  /** Position information for the pivot table's data within its output range. */
  location: PivotTableLocation;
  /**
   * The pivot fields, paralleling the cache's {@link PivotCache.fields | fields} array by index.
   * Each field's configuration determines whether and how it participates in the pivot table
   * layout.
   */
  fields: PivotField[];
  /**
   * Indices into {@link fields} identifying which fields appear on the row axis, in display order.
   * Negative indices are special placeholders (e.g. `-2` represents the "Values" virtual field,
   * used when there are multiple data fields) and do not index into {@link fields}.
   */
  rowFieldIndices?: integer[];
  /**
   * Indices into {@link fields} identifying which fields appear on the column axis, in display
   * order. Negative indices are special placeholders (e.g. `-2` represents the "Values" virtual
   * field) and do not index into {@link fields}.
   */
  colFieldIndices?: integer[];
  /** The data fields, defining the aggregated values displayed in the pivot table's data area. */
  dataFields?: PivotDataField[];
  /** The page (filter) fields, allowing the pivot table to be filtered by specific field values. */
  pageFields?: PivotPageField[];
  /** Layout items for the row area, describing each row header. */
  rowItems?: PivotRowColItem[];
  /** Layout items for the column area, describing each column header. */
  colItems?: PivotRowColItem[];
  /** Presentation style for the pivot table. */
  style?: PivotTableStyle;
  // formats and conditionalFormats are omitted for now: they depend on the differential
  // formatting (dxf) table which doesn't exist in JSF yet, and the conditional formatting
  // model is not finalized.
  /** Advanced filters applied to pivot fields. */
  filters?: PivotFilter[];
  /**
   * Calculated field definitions. Each entry defines a formula-based field that derives its values
   * from other cache fields.
   */
  calculatedFields?: PivotCalculatedField[];
  /**
   * Whether grand totals should be shown for rows.
   *
   * @default true
   */
  rowGrandTotals?: boolean;
  /**
   * Whether grand totals should be shown for columns.
   *
   * @default true
   */
  colGrandTotals?: boolean;
  /**
   * Whether the pivot table should automatically refresh when its source data changes.
   *
   * @default false
   */
  autoRefresh?: boolean;

  // --- Layout defaults (table-level) ---

  /**
   * Default compact flag for pivot fields. Fields inherit this unless they override
   * {@link PivotField.compact | their own compact}.
   *
   * @default true
   */
  compact?: boolean;
  /**
   * Default outline flag for pivot fields. Fields inherit this unless they override
   * {@link PivotField.outline | their own outline}.
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Whether data-area values are repeated on outline header rows. When false (the default),
   * values appear only on the innermost detail rows; when true, each outline-level header row
   * also shows the aggregated values for its group.
   *
   * @default false
   */
  outlineData?: boolean;
  /**
   * Whether data fields in compact layout share a single column.
   *
   * @default true
   */
  compactData?: boolean;
  /**
   * Whether classic-style grid drop zones are shown. Drop zones are labeled regions (e.g.
   * "Drop Row Fields Here") displayed in the pivot table area where fields can be dragged to
   * assign them to an axis.
   *
   * @default false
   */
  gridDropZones?: boolean;
  /**
   * Number of character widths to indent row labels in compact layout.
   *
   * @default 1
   */
  indent?: integer;

  // --- Data axis ---

  /**
   * Whether the data (values) axis runs along rows rather than columns.
   *
   * @default false
   */
  dataOnRows?: boolean;
  /**
   * Position of the "Values" virtual field within its axis. When absent, the Values field is placed
   * at the end.
   */
  dataPosition?: integer;

  // --- Display options ---

  /**
   * Whether row and column headers are displayed.
   *
   * @default true
   */
  showHeaders?: boolean;
  /**
   * Whether empty rows are shown in the output.
   *
   * @default false
   */
  showEmptyRow?: boolean;
  /**
   * Whether empty columns are shown in the output.
   *
   * @default false
   */
  showEmptyCol?: boolean;
  /**
   * Whether drop zones for fields are displayed in the pivot table area.
   *
   * @default true
   */
  showDropZones?: boolean;
  /**
   * Whether member property tooltips are shown.
   *
   * @default true
   */
  showMemberPropertyTips?: boolean;
  /**
   * Whether drill-down (expand/collapse) is enabled on pivot field items.
   *
   * @default true
   */
  enableDrill?: boolean;
  /**
   * Whether the pivot table shows "Multiple Items" labels when a page field
   * has more than one item selected.
   *
   * @default true
   */
  showMultipleLabel?: boolean;

  // --- Captions ---

  // Required in the OOXML schema (dataCaption is a required attribute on
  // CT_pivotTableDefinition), but optional here to support partial construction.
  /**
   * Caption for the data (values) area. Excel always writes this (typically `"Data"` or a
   * localized equivalent).
   */
  dataCaption?: string;
  /** Custom label for grand total rows/columns. */
  grandTotalCaption?: string;
  /** Text to display in place of error values. */
  errorCaption?: string;
  /**
   * Whether error captions are shown (when true, cells with errors display {@link errorCaption}).
   *
   * @default false
   */
  showError?: boolean;
  /** Text to display in place of missing values. */
  missingCaption?: string;
  /**
   * Whether missing-value captions are shown.
   *
   * @default true
   */
  showMissing?: boolean;
  /** Caption for the row header area. */
  rowHeaderCaption?: string;
  /** Caption for the column header area. */
  colHeaderCaption?: string;

  // --- Behavior ---

  /**
   * Whether hidden items are included in subtotals.
   *
   * @default false
   */
  subtotalHiddenItems?: boolean;
  /**
   * Whether field names are printed on each page when the pivot table is printed.
   *
   * @default false
   */
  fieldPrintTitles?: boolean;
  /**
   * Whether item labels are printed on each page when the pivot table is printed.
   *
   * @default false
   */
  itemPrintTitles?: boolean;
  /**
   * Whether labels from outer row fields are merged across cells.
   *
   * @default false
   */
  mergeItem?: boolean;
  /**
   * Whether custom list ordering is used when sorting items.
   *
   * @default true
   */
  customListSort?: boolean;
  /**
   * Whether multiple filters can be applied to a single field simultaneously.
   *
   * @default true
   */
  multipleFieldFilters?: boolean;
  /**
   * Whether field items are shown in the pivot table body.
   *
   * @default true
   */
  showItems?: boolean;
  /**
   * Whether calculated members from OLAP data sources are shown.
   *
   * @default true
   */
  showCalcMbrs?: boolean;
  /**
   * Whether cell formatting is preserved on refresh.
   *
   * @default true
   */
  preserveFormatting?: boolean;
  /**
   * Number of page fields per column before wrapping to a new column.
   *
   * @default 0
   */
  pageWrap?: integer;
  /**
   * Whether page fields are laid out across then down (true) or down then across (false).
   *
   * @default false
   */
  pageOverThenDown?: boolean;

  // --- AutoFormat ---

  /** Built-in auto-format ID. */
  autoFormatId?: integer;
  /**
   * Whether auto-formatting is applied.
   *
   * @default false
   */
  useAutoFormatting?: boolean;
  /**
   * Whether number formats from the auto-format are applied.
   *
   * @default false
   */
  applyNumberFormats?: boolean;
  /**
   * Whether border formats from the auto-format are applied.
   *
   * @default false
   */
  applyBorderFormats?: boolean;
  /**
   * Whether font formats from the auto-format are applied.
   *
   * @default false
   */
  applyFontFormats?: boolean;
  /**
   * Whether pattern (fill) formats from the auto-format are applied.
   *
   * @default false
   */
  applyPatternFormats?: boolean;
  /**
   * Whether alignment formats from the auto-format are applied.
   *
   * @default false
   */
  applyAlignmentFormats?: boolean;
  /**
   * Whether width/height adjustments from the auto-format are applied.
   *
   * @default false
   */
  applyWidthHeightFormats?: boolean;
};
