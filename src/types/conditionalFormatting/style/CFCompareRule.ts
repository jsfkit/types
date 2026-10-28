import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells based on comparing the cell value to one formula, or to two for `between` and
 * `notBetween`. Text is compared case-insensitively.
 *
 * @group ConditionalFormatting
 */
export type CFCompareRule = CFStyleRuleBase & {
  type: 'compare';
  operator:
    'lessThan' |
    'lessThanOrEqual' |
    'equal' |
    'notEqual' |
    'greaterThanOrEqual' |
    'greaterThan' |
    'between' |
    'notBetween';
  /**
   * Formulas whose results the cell value is compared to.
   *
   * Two formulas (lower and upper bounds) are required when `operator` is `between` or
   * `notBetween`. Only one formula for every other operator. Formulas must not include a leading
   * `=`. Relative references are resolved as described in {@link CFRuleBase.ref}.
   */
  formulas: [string] | [string, string];
};
