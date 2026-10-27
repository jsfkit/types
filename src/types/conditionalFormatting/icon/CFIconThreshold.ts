import type { CFValueThreshold } from '../CFValueThreshold.ts';

/**
 * An icon set threshold.
 *
 * @group ConditionalFormatting
 */
export type CFIconThreshold = CFValueThreshold & {
  /**
   * Whether a cell equal to the threshold is counted as meeting it.
   *
   * @default true
   */
  gte?: boolean;
};
