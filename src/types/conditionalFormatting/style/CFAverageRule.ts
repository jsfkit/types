import type { integer } from '../../integer.ts';
import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells above or below the range's mean.
 *
 * @group ConditionalFormatting
 */
export type CFAverageRule = CFStyleRuleBase & {
  type: 'average';
  /**
   * Whether to match cells above or below the mean.
   *
   * @default "above"
   */
  direction?: 'above' | 'below';
  /**
   * Whether cells equal to the mean also match.
   *
   * @default false
   */
  inclusive?: boolean;
  /**
   * When present, match cells more than this many standard deviations _above_ or _below_ the mean,
   * depending on the value of `direction`. `inclusive` is then ignored.
   *
   * @min 1
   * @max 3
   */
  standardDeviations?: integer;
};
