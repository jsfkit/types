import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose value appears more than once in the rule's `ref`, or only once when `negate`
 * is `true`.
 *
 * Comparison is case-insensitive. Empty cells are ignored, but a cell holding an empty string or
 * only spaces has a value and is compared like any other text.
 *
 * @group ConditionalFormatting
 */
export type CFDuplicateRule = CFStyleRuleBase & {
  type: 'duplicate';
  /**
   * Match values that appear only once instead.
   *
   * @default false
   */
  negate?: boolean;
};
