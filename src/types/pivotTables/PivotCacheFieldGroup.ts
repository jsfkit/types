import type { integer } from '../integer.ts';
import type { PivotCacheRangePr } from './PivotCacheRangePr.ts';
import type { PivotCacheSharedItem } from './PivotCacheSharedItem.ts';

/**
 * Field grouping information that defines how a cache field's values are grouped.
 *
 * @group PivotTables
 */
export type PivotCacheFieldGroup = {
  /** Index of the parent grouped field (for multi-level grouping). */
  par?: integer;
  /** Index of the base (source) cache field that this grouping is derived from. */
  base?: integer;
  /** Range grouping properties (for date or numeric range grouping). */
  rangePr?: PivotCacheRangePr;
  /** Discrete grouping: maps each shared item index to its group index. */
  discretePr?: integer[];
  /** The group item labels, representing each group's display value. */
  groupItems?: PivotCacheSharedItem[];
};
