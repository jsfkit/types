import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose value is an error, or whose value isn't when `negate` is `true`.
 *
 * @group ConditionalFormatting
 */
export type CFErrorRule = CFStyleRuleBase & {
  /** Type discriminator. */
  type: 'error';
  /**
   * Match cells whose value is not an error instead.
   *
   * @default false
   */
  negate?: boolean;
};
