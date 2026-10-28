import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells where `formula` evaluates to `true`.
 *
 * @group ConditionalFormatting
 */
export type CFFormulaRule = CFStyleRuleBase & {
  type: 'formula';
  /**
   * The formatting condition as a formula (without a leading `=`). If the formula evaluates to
   * `true` then the formatting is applied. Relative references are resolved as described in
   * {@link CFRuleBase.ref}.
   */
  formula: string;
};
