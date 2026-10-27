import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells where `formula` evaluates to `true`.
 *
 * @group ConditionalFormatting
 */
export type CFExpressionRule = CFStyleRuleBase & {
  type: 'expression';
  /**
   * The formatting condition as a formula (without a leading `=`). If the formula evaluates to
   * `true` then the formatting is applied. Relative references are anchored to the first cell of
   * `ref`.
   */
  formula: string;
};
