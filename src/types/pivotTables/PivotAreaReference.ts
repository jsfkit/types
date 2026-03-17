import type { integer } from '../integer.ts';
import type { PivotFieldIndex } from './PivotFieldIndex.ts';

/**
 * A reference within a pivot area, identifying specific field items that define the area's scope.
 *
 * @group PivotTables
 */
export type PivotAreaReference = {
  /** The field this reference applies to. See {@link PivotFieldIndex} for valid values. */
  field?: PivotFieldIndex;
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
