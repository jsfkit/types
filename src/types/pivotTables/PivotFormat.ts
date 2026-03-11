import type { PivotArea } from './PivotArea.ts';

/**
 * A custom format applied to a specific region of a pivot table.
 *
 * Each format pairs a {@link PivotFormat.pivotArea | pivotArea} that defines which cells the
 * format targets with an action indicating whether formatting is applied or blanked.
 *
 * @group PivotTables
 */
export type PivotFormat = {
  /**
   * Whether this format applies formatting or represents a blank override.
   *
   * @default 'formatting'
   */
  action?: 'formatting' | 'blank';
  /** The pivot table region this format applies to. */
  pivotArea: PivotArea;
};
