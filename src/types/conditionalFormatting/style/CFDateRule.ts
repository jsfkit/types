import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose date falls in a window relative to today.
 *
 * @group ConditionalFormatting
 */
export type CFDateRule = CFStyleRuleBase & {
  type: 'date';
  /**
   * Date windows, relative to the current date. Weeks run from Sunday to Saturday. `last7Days` is
   * today and the six days before it. Time of day is ignored.
   */
  period:
    'today' |
    'yesterday' |
    'tomorrow' |
    'last7Days' |
    'thisMonth' |
    'lastMonth' |
    'nextMonth' |
    'thisWeek' |
    'lastWeek' |
    'nextWeek';
};
