import type { ChartValue } from './ChartValue.ts';

/**
 * The values that a scale covers: either the values of a field, or an explicit list.
 *
 * @group Charts
 */
export type ChartScaleDomain = {
  data: string;
  field: string;
} | {
  values: ChartValue[];
};
