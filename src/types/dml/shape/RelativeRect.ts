import type { Percentage } from './Percentage.ts';

/**
 * Relative rectangle with percentage-based insets.
 *
 * Defines a rectangle using relative offsets from each edge, expressed as percentages
 * of the parent rectangle's dimensions.
 */
export type RelativeRect = {
  /** Top edge offset as percentage from top. */
  t: Percentage;

  /** Left edge offset as percentage from left. */
  l: Percentage;

  /** Bottom edge offset as percentage from bottom. */
  b: Percentage;

  /** Right edge offset as percentage from right. */
  r: Percentage;
};
