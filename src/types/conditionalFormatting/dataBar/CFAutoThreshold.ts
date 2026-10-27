/**
 * A threshold at the lowest (`autoMin`) or highest (`autoMax`) value in the range that never
 * crosses zero: `autoMin` is at most 0 and `autoMax` at least 0. Only data bars support these
 * thresholds.
 *
 * @group ConditionalFormatting
 */
export type CFAutoThreshold = {
  type: 'autoMin' | 'autoMax';
};
