import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells that are empty, or that aren't, depending on `type`. A cell holding only space
 * characters (U+0020) counts as empty; other whitespace does not.
 *
 * @group ConditionalFormatting
 */
export type CFBlanksRule = CFStyleRuleBase & {
  type: 'containsBlanks' | 'notContainsBlanks';
};
