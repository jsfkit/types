/**
 * A single criterion within a custom auto-filter, specifying an operator and comparison value.
 *
 * @group PivotTables
 */
export type PivotCustomFilterCriterion = {
  operator?: 'lessThan' | 'lessThanOrEqual' | 'equal' | 'notEqual' |
    'greaterThanOrEqual' | 'greaterThan';
  val?: string;
};
