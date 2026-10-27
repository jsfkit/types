import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose value is an error, or whose value isn't, depending on `type`.
 *
 * @group ConditionalFormatting
 */
export type CFErrorsRule = CFStyleRuleBase & {
  type: 'containsErrors' | 'notContainsErrors';
};
