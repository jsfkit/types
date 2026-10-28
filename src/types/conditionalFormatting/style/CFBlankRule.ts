import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells that are empty, or that aren't when `negate` is `true`. A cell holding only space
 * characters (U+0020) counts as empty; other whitespace does not.
 *
 * @group ConditionalFormatting
 */
export type CFBlankRule = CFStyleRuleBase & {
  type: 'blank';
  /**
   * Match cells that are not blank instead.
   *
   * @default false
   */
  negate?: boolean;
};
