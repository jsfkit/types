import type { PivotCustomFilterOperator } from './PivotCustomFilterOperator.ts';

/**
 * A single criterion within a custom auto-filter, specifying an operator and comparison value.
 *
 * @group PivotTables
 */
export type PivotCustomFilterCriterion = {
  operator?: PivotCustomFilterOperator;
  val?: string;
};
