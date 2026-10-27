import type { Color } from '../../colors/Color.ts';
import type { CFMinMaxThreshold } from '../CFMinMaxThreshold.ts';
import type { CFValueThreshold } from '../CFValueThreshold.ts';

/**
 * A colour scale stop: a threshold paired with the colour the scale reaches at that threshold.
 *
 * @group ConditionalFormatting
 */
export type CFColorStop = (CFMinMaxThreshold | CFValueThreshold) & {
  color: Color;
};
