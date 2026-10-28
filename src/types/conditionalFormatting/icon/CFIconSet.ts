import type { CFIcon } from './CFIcon.ts';
import type { CFIconThreshold } from './CFIconThreshold.ts';

/**
 * Icon set settings.
 *
 * @group ConditionalFormatting
 */
export type CFIconSet = {
  /**
   * Which built-in icon set to draw from. Ignored for icons overridden in `customIcons`.
   *
   * Note that the actual icons used for each icon set are left to individual implementations to
   * decide.
   *
   * @default "3TrafficLights1"
   */
  name?:
    '3Arrows' |
    '3ArrowsGray' |
    '3Flags' |
    '3TrafficLights1' |
    '3TrafficLights2' |
    '3Signs' |
    '3Symbols' |
    '3Symbols2' |
    '4Arrows' |
    '4ArrowsGray' |
    '4RedToBlack' |
    '4Rating' |
    '4TrafficLights' |
    '5Arrows' |
    '5ArrowsGray' |
    '5Rating' |
    '5Quarters' |
    '3Triangles' |
    '3Stars' |
    '5Boxes' |
    'NoIcons';
  /**
   * Thresholds, lowest first. There is one per icon, and the first should always be
   * `{ type: 'percent', value: 0 }`.
   */
  thresholds: CFIconThreshold[];
  /**
   * Whether the cell value is shown alongside the icon.
   *
   * @default true
   */
  showValue?: boolean;
  /**
   * Whether the icon order is reversed.
   *
   * @default false
   */
  reverse?: boolean;
  /**
   * Per-threshold icon overrides, in the same order as `thresholds`. Present when icons are picked
   * individually.
   */
  customIcons?: CFIcon[];
};
