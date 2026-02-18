import type { Percentage } from '../Percentage.ts';

/**
 * A dash stop primitive consistsing of a dash and a space.
 */
export type DashStop = {
  /** Length of the dash (relative to line width) */
  d: Percentage;
  /** Length of the space (relative to line width) */
  sp: Percentage;
};
