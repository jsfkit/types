import type { integer } from '../integer.ts';
import type { PivotAreaAxis } from './PivotAreaAxis.ts';
import type { PivotAreaReference } from './PivotAreaReference.ts';
import type { PivotAreaType } from './PivotAreaType.ts';

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
