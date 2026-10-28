import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose text contains, doesn't contain, begins with, or ends with `match`.
 *
 * Matching is case-insensitive. For `contains` and `notContains`, `?` in the text matches any
 * single character, `*` matches any sequence of characters, and `~` escapes the character that
 * follows it. `beginsWith` and `endsWith` match the text literally.
 *
 * @group ConditionalFormatting
 */
export type CFTextRule = CFStyleRuleBase & {
  type: 'text';
  operator: 'contains' | 'notContains' | 'beginsWith' | 'endsWith';
  /**
   * The text to look for, or a formula (no leading `=`) producing it when `matchIsFormula` is
   * `true`. Relative references in a formula are resolved as described in
   * {@link CFRuleBase.ref}.
   */
  match: string;
  /**
   * Whether `match` is a formula (usually a cell reference) rather than literal text.
   *
   * @default false
   */
  matchIsFormula?: boolean;
};
