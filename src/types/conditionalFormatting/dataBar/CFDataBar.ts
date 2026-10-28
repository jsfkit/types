import type { Color } from '../../colors/Color.ts';
import type { integer } from '../../integer.ts';
import type { CFDataBarThreshold } from './CFDataBarThreshold.ts';

/**
 * Data bar settings.
 *
 * @group ConditionalFormatting
 */
export type CFDataBar = {
  /** Threshold at which the bar is shortest. */
  min: CFDataBarThreshold;
  /** Threshold at which the bar is longest. */
  max: CFDataBarThreshold;
  /**
   * Length of the shortest bar as a percentage of the cell width.
   *
   * @default 10
   */
  minLength?: integer;
  /**
   * Length of the longest bar as a percentage of the cell width.
   *
   * @default 90
   */
  maxLength?: integer;
  /**
   * Whether the cell value is shown alongside the bar.
   *
   * @default true
   */
  showValue?: boolean;
  /** Bar fill colour. */
  fillColor: Color;
  /** Bar border colour. When absent, bars have no border. */
  borderColor?: Color;
  /** Bar colour for negative values. When absent, `fillColor` is used. */
  negativeFillColor?: Color;
  /** Bar border colour for negative values. When absent, `borderColor` is used. */
  negativeBorderColor?: Color;
  /** Colour of the axis drawn between positive and negative bars. */
  axisColor?: Color;
  /**
   * Whether the bar is filled with a gradient (`true`) or a solid colour (`false`).
   *
   * @default true
   */
  gradient?: boolean;
  /**
   * Direction the bar grows in. `context` follows the sheet's reading direction.
   *
   * @default "context"
   */
  direction?: 'context' | 'leftToRight' | 'rightToLeft';
  /**
   * Where the axis sits when the range holds both positive and negative values.
   *
   * @default "automatic"
   */
  axisPosition?: 'automatic' | 'middle' | 'none';
};
