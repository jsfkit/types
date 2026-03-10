import type { integer } from '../integer.ts';
import type { PivotItemType } from './PivotItemType.ts';

/**
 * A layout item in the row or column area, describing what each row or column header represents.
 *
 * @group PivotTables
 */
export type PivotRowColItem = {
  /**
   * The type of this layout item (same enumeration as {@link PivotFieldItem.itemType}).
   *
   * @default 'data'
   */
  itemType?: PivotItemType;
  /**
   * The number of leading axis positions whose {@link itemIndices} entries are omitted because
   * they are identical to the previous {@link PivotRowColItem}'s values (see
   * {@link PivotTable | PivotTable's type description} for the level/axis model). The omitted
   * entries are inherited from the preceding item in {@link PivotTable.rowItems | rowItems} or
   * {@link PivotTable.colItems | colItems}.
   *
   * @default 0
   */
  repeatedItemCount?: integer;
  /**
   * Indices into each axis field's {@link PivotField.items | items} array. Entries correspond
   * positionally to the fields listed in {@link PivotTable.rowFieldIndices | rowFieldIndices} (for
   * row items) or {@link PivotTable.colFieldIndices | colFieldIndices} (for column items): entry
   * *i* indexes into the *i*-th axis field's {@link PivotField.items | items}.
   *
   * When {@link repeatedItemCount} is greater than zero, the first that many entries are omitted
   * (inherited from the previous {@link PivotRowColItem}), so the array starts at position
   * {@link repeatedItemCount}.
   */
  itemIndices?: integer[];
  /**
   * Index into the pivot table's {@link PivotTable.dataFields | dataFields}, indicating which data
   * field this item represents.
   *
   * @default 0
   */
  dataFieldIndex?: integer;
};
