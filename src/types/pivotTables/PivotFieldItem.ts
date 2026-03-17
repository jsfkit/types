import type { integer } from '../integer.ts';
import type { PivotItemType } from './PivotItemType.ts';

/**
 * An item within a pivot field. Items represent individual values, subtotals, or other special
 * entries in a row or column field.
 *
 * @group PivotTables
 */
export type PivotFieldItem = {
  /**
   * Index into the corresponding cache field's {@link PivotCacheField.sharedItems | sharedItems}
   * array. Absent for non-data items (subtotals, grand totals, blanks).
   */
  itemIndex?: integer;
  /**
   * The type of this item.
   *
   * @default 'data'
   */
  itemType?: PivotItemType;
  /**
   * Whether this item is hidden (filtered out).
   *
   * @default false
   */
  hidden?: boolean;
  /**
   * Display name override for this item. When absent, the item's name is
   * derived from the cache field's shared items.
   */
  name?: string;
  /**
   * Whether this item's children are expanded (visible).
   *
   * @default true
   */
  expanded?: boolean;
  /**
   * Whether this item refers to a value that is no longer in the source data (a "missing" item).
   *
   * @default false
   */
  missing?: boolean;
};
