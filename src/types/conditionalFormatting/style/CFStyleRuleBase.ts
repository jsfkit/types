import type { integer } from '../../integer.ts';
import type { CFRuleBase } from '../CFRuleBase.ts';

/**
 * Properties shared by every {@link CFStyleRule}.
 *
 * @group ConditionalFormatting
 */
export type CFStyleRuleBase = CFRuleBase & {
  /**
   * Index into the workbook's differential styles table.
   */
  dxf?: integer;
  /**
   * Whether rules with a higher {@link CFRuleBase.priority} value are skipped
   * for a cell once this rule matches.
   *
   * @default false
   */
  stopIfTrue?: boolean;
};
