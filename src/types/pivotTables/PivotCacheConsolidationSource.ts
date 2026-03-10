import type { PivotCacheConsolidationRangeSet } from './PivotCacheConsolidationRangeSet.ts';

/**
 * Describes the source of a pivot cache's data when it consolidates multiple ranges (via the
 * legacy PivotTable Wizard).
 *
 * @group PivotTables
 */
export type PivotCacheConsolidationSource = {
  /**
   * Whether Excel automatically creates page fields.
   *
   * @default true
   */
  autoPage?: boolean;
  /** Page fields. Each inner array is one page field's item names. Up to 4. */
  pages?: string[][];
  /** The source ranges being consolidated. */
  rangeSets: PivotCacheConsolidationRangeSet[];
};
