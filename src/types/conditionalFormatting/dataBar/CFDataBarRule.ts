import type { CFRuleBase } from '../CFRuleBase.ts';
import type { CFDataBar } from './CFDataBar.ts';

/**
 * Format cells with a bar whose length is proportional to each cell's value.
 *
 * @group ConditionalFormatting
 */
export type CFDataBarRule = CFRuleBase & {
  type: 'dataBar';
  dataBar: CFDataBar;
  /**
   * A condition, as a formula, that limits which cells show the data bar. The data bar is shown
   * only in cells where the formula returns a nonzero value. When absent, the data bar is shown in
   * every cell of `ref`. Relative references are anchored to the first cell of `ref`.
   *
   * The formula should not include a leading `=`.
   */
  formula?: string;
};
