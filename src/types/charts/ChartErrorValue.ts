import type { ErrorName } from './ErrorName.ts';

/**
 * An error value. Errors are kept distinct from `null` because Excel renders them differently.
 * For example, a line chart skips an `#N/A` point and connects the line across it, while an
 * empty cell follows {@link Chart.showBlanksAs}. {@link Chart.showNaAsBlank} changes this.
 *
 * This uses the same tagged form as `PivotCacheSharedItemErr`.
 *
 * @group Charts
 */
export type ChartErrorValue = {
  t: 'e';
  v: ErrorName;
};
