import type { integer } from '../integer.ts';
import type { PivotAreaAxis } from './PivotAreaAxis.ts';

/**
 * The type of pivot area targeted.
 *
 * @group PivotTables
 */
export type PivotAreaType =
  'none' | 'normal' | 'data' | 'all' | 'origin' | 'button' | 'topRight';

/**
 * A reference within a pivot area, identifying specific field items that define the area's scope.
 *
 * @group PivotTables
 */
export type PivotAreaReference = {
  /**
   * Index of the field this reference applies to.
   * The special value `4294967294` (0xFFFFFFFE) refers to the data (values) field.
   */
  field?: integer;
  /**
   * Whether this reference participates in the selection. When false, the reference
   * constrains the area without being selected itself.
   *
   * @default true
   */
  selected?: boolean;
  /**
   * Whether item indices are positional (absolute row/column position)
   * rather than field-item-based.
   *
   * @default false
   */
  byPosition?: boolean;
  /**
   * Whether the reference is relative to the pivot table's origin.
   *
   * @default false
   */
  relative?: boolean;

  // --- Subtotal inclusion flags ---

  /**
   * Whether the default subtotal is included.
   *
   * @default false
   */
  defaultSubtotal?: boolean;
  /**
   * Whether the sum subtotal is included.
   *
   * @default false
   */
  sumSubtotal?: boolean;
  /**
   * Whether the countA subtotal is included.
   *
   * @default false
   */
  countASubtotal?: boolean;
  /**
   * Whether the average subtotal is included.
   *
   * @default false
   */
  avgSubtotal?: boolean;
  /**
   * Whether the max subtotal is included.
   *
   * @default false
   */
  maxSubtotal?: boolean;
  /**
   * Whether the min subtotal is included.
   *
   * @default false
   */
  minSubtotal?: boolean;
  /**
   * Whether the product subtotal is included.
   *
   * @default false
   */
  productSubtotal?: boolean;
  /**
   * Whether the count subtotal is included.
   *
   * @default false
   */
  countSubtotal?: boolean;
  /**
   * Whether the standard deviation subtotal is included.
   *
   * @default false
   */
  stdDevSubtotal?: boolean;
  /**
   * Whether the population standard deviation subtotal is included.
   *
   * @default false
   */
  stdDevPSubtotal?: boolean;
  /**
   * Whether the variance subtotal is included.
   *
   * @default false
   */
  varSubtotal?: boolean;
  /**
   * Whether the population variance subtotal is included.
   *
   * @default false
   */
  varPSubtotal?: boolean;

  /** Indices of the field items included in this reference. */
  itemIndices?: integer[];
};

/**
 * Describes a region of a pivot table, used to target formatting, conditional formatting,
 * and other area-specific features.
 *
 * @group PivotTables
 */
export type PivotArea = {
  /**
   * The type of area.
   *
   * @default 'normal'
   */
  type?: PivotAreaType;
  /** The field index this area applies to. */
  field?: integer;
  /**
   * Whether the area applies only to data cells (excluding labels).
   *
   * @default true
   */
  dataOnly?: boolean;
  /**
   * Whether the area applies only to label cells (excluding data).
   *
   * @default false
   */
  labelOnly?: boolean;
  /**
   * Whether the row grand total is included.
   *
   * @default false
   */
  grandRow?: boolean;
  /**
   * Whether the column grand total is included.
   *
   * @default false
   */
  grandCol?: boolean;
  /**
   * Whether item indices refer to cache field items rather than pivot field items.
   *
   * @default false
   */
  cacheIndex?: boolean;
  /**
   * Whether the area includes outline-mode items.
   *
   * @default true
   */
  outline?: boolean;
  /** A cell reference offset relative to the pivot table's top-left corner. */
  offset?: string;
  /**
   * Whether collapsed hierarchy levels are treated as subtotals.
   *
   * @default false
   */
  collapsedLevelsAreSubtotals?: boolean;
  /** The axis this area targets. */
  axis?: PivotAreaAxis;
  /** The position of the field on its axis (0-based). */
  fieldPosition?: integer;
  /** References that narrow the area to specific field items. */
  references?: PivotAreaReference[];
};
