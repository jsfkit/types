import type { ErrorName } from './ErrorName.ts';

// XXX: This is pretty much the same as PivotCacheSharedItemErr & an error cell
/**
 * An error value. Errors are kept distinct from `null` because they render differently.
 * For example, a line chart skips an `#N/A` point and connects the line across it, while an
 * empty cell follows {@link Chart.showBlanksAs}. {@link Chart.showNaAsBlank} changes this.
 *
 * @group Charts
 */
export type ChartErrorValue = {
  /**
   * Marks the value as an error.
   */
  t: 'e';
  /**
   * The error, such as `#N/A`.
   */
  v: ErrorName;
};
