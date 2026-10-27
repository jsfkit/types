import type { CFRuleBase } from '../CFRuleBase.ts';
import type { CFIconSet } from './CFIconSet.ts';

/**
 * Format cells with an icon chosen by which threshold each cell's value crosses.
 *
 * @group ConditionalFormatting
 */
export type CFIconSetRule = CFRuleBase & {
  type: 'iconSet';
  iconSet: CFIconSet;
  /**
   * A condition, as a formula, that limits which cells show an icon. Icons are shown only in cells
   * where the formula returns a nonzero value. When absent, icons are shown in every cell of `ref`.
   * Relative references are anchored to the first cell of `ref`.
   *
   * The formula should not include a leading `=`.
   */
  formula?: string;
};
