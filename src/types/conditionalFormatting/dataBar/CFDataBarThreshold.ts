import type { CFMinMaxThreshold } from '../CFMinMaxThreshold.ts';
import type { CFValueThreshold } from '../CFValueThreshold.ts';
import type { CFAutoThreshold } from './CFAutoThreshold.ts';

/**
 * A data bar threshold, at either end of the bar.
 *
 * @group ConditionalFormatting
 */
export type CFDataBarThreshold = CFMinMaxThreshold | CFAutoThreshold | CFValueThreshold;
