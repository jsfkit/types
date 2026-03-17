import type { integer } from '../integer.ts';
import type { PivotArea } from './PivotArea.ts';
import type { PivotFieldAxis } from './PivotFieldAxis.ts';
import type { PivotFieldItem } from './PivotFieldItem.ts';
import type { PivotSubtotalFunction } from './PivotSubtotalFunction.ts';

/**
 * Configuration for a single field in a pivot table. There is one PivotField per cache field, in
 * the same order as the cache fields.
 *
 * @group PivotTables
 */
export type PivotField = {
  /**
   * Display name override for this field. When present, this replaces
   * the cache field name in the pivot table's UI. Distinct from {@link PivotFieldItem.name} which
   * overrides individual item labels.
   */
  name?: string;
  /**
   * Which axis this field is placed on. Absent if the field is not placed on a row, column, or
   * page axis (e.g. fields used only as data fields, or fields not used in the layout at all).
   */
  axis?: PivotFieldAxis;
  /**
   * Whether this field is used as a data field. Data fields appear in the pivot table's
   * {@link PivotDataField} list; this flag indicates
   * that the field participates as a value source rather than being placed on a row/col/page axis.
   *
   * @default false
   */
  dataField?: boolean;
  /**
   * Whether to show all items for this field, including those with no data.
   *
   * @default true
   */
  showAll?: boolean;
  /**
   * The subtotal functions to show. When absent or empty, the default subtotal (typically sum or
   * count) is used.
   */
  subtotalFunctions?: PivotSubtotalFunction[];
  /**
   * The sort order for this field's items.
   *
   * @default 'manual'
   */
  sortType?: 'manual' | 'ascending' | 'descending';
  /** The items in this field, representing unique values and special entries. */
  items?: PivotFieldItem[];

  // --- Layout mode ---

  /**
   * Whether the field uses compact layout (labels in the same column as child fields).
   *
   * @default true
   */
  compact?: boolean;
  /**
   * Whether the field uses outline layout (labels on their own row, above child data).
   *
   * @default true
   */
  outline?: boolean;
  /**
   * Whether subtotals appear at the top of each group (only meaningful in outline mode).
   *
   * @default true
   */
  subtotalTop?: boolean;
  /**
   * Whether to insert a blank row after each group in this field.
   *
   * @default false
   */
  insertBlankRow?: boolean;

  // --- Subtotal control ---

  /**
   * Whether to show the default subtotal for this field.
   *
   * @default true
   */
  defaultSubtotal?: boolean;
  /** Custom caption for the subtotal row. */
  subtotalCaption?: string;

  // --- Number format ---

  /** The number format code for this field's data (e.g. `"General"`, `"#,##0"`). */
  numFmt?: string;

  // --- UI/drag behavior (round-trip fidelity) ---

  /**
   * Whether filter dropdowns are shown for this field.
   *
   * @default true
   */
  showDropDowns?: boolean;
  /**
   * Whether the field can be dragged to the row axis.
   *
   * @default true
   */
  dragToRow?: boolean;
  /**
   * Whether the field can be dragged to the column axis.
   *
   * @default true
   */
  dragToCol?: boolean;
  /**
   * Whether the field can be dragged to the page (filter) axis.
   *
   * @default true
   */
  dragToPage?: boolean;
  /**
   * Whether the field can be dragged to the data area.
   *
   * @default true
   */
  dragToData?: boolean;
  /**
   * Whether the field can be dragged off the pivot table (removed).
   *
   * @default true
   */
  dragOff?: boolean;
  /**
   * Whether multiple items can be selected in this field's filter.
   *
   * @default false
   */
  multipleItemSelectionAllowed?: boolean;
  /**
   * Whether a page break is inserted after each group in this field.
   *
   * @default false
   */
  insertPageBreak?: boolean;
  /**
   * Whether newly added items are hidden by default.
   *
   * @default false
   */
  hideNewItems?: boolean;
  /**
   * Whether new items are included in the field's manual filter.
   *
   * @default false
   */
  includeNewItemsInFilter?: boolean;

  // --- Auto-show (top/bottom N filter) ---

  /**
   * Whether the auto-show (top/bottom N) filter is enabled.
   *
   * @default false
   */
  autoShow?: boolean;
  /**
   * Whether auto-show displays the top N items (true) or bottom N items (false).
   *
   * @default true
   */
  topAutoShow?: boolean;
  /**
   * Number of items to display when auto-show is enabled.
   *
   * @default 10
   */
  itemPageCount?: integer;

  // --- Sort (advanced) ---

  /**
   * Pivot area defining the sort key when `sortType` is `'ascending'` or
   * `'descending'`. Specifies which data field's values to sort by (via a
   * reference with `field: -2`), and may include additional references to
   * constrain the scope. Absent when sorting is alphabetical (by the field's
   * own labels).
   */
  autoSortScope?: PivotArea;
  /** Whether sorting is deferred to the data source. */
  dataSourceSort?: boolean;
  /**
   * Whether the field defaults to no auto-sort (manual sort).
   *
   * @default false
   */
  nonAutoSortDefault?: boolean;
  /** Index of the data field used for ranking. */
  rankBy?: integer;

  // --- OLAP-specific (round-trip fidelity) ---

  /**
   * Whether this field's hierarchy level is hidden.
   *
   * @default false
   */
  hiddenLevel?: boolean;
  /** The unique member property for this field (OLAP). */
  uniqueMemberProperty?: string;
  /**
   * Whether all items in this field are drilled down.
   *
   * @default false
   */
  allDrilled?: boolean;
  /**
   * Whether this is a server-based field.
   *
   * @default false
   */
  serverField?: boolean;
  /**
   * Whether the field supports measure filtering (OLAP).
   *
   * @default false
   */
  measureFilter?: boolean;
  /**
   * Whether member property values are shown in cells.
   *
   * @default false
   */
  showPropCell?: boolean;
  /**
   * Whether member property values are shown in tooltips.
   *
   * @default false
   */
  showPropTip?: boolean;
  /**
   * Whether member property values are used as captions.
   *
   * @default false
   */
  showPropAsCaption?: boolean;
  /**
   * Default drill state for member properties.
   *
   * @default false
   */
  defaultAttributeDrillState?: boolean;
};
