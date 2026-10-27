import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose value appears more than once in the rule's `ref`, or only once, depending on
 * `type`.
 *
 * Comparison is case-insensitive. Empty cells are ignored, but a cell holding an empty string or
 * only spaces has a value and is compared like any other text.
 *
 * @group ConditionalFormatting
 */
export type CFValuesRule = CFStyleRuleBase & {
  type: 'duplicateValues' | 'uniqueValues';
};
