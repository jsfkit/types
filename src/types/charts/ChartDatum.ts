import type { ChartValue } from './ChartValue.ts';

/**
 * One evaluated record: the values of one point of one series, keyed by field. Records aren't
 * stored in a chart. They're what evaluating a dataset produces.
 *
 * @group Charts
 */
export type ChartDatum = Record<string, ChartValue>;
