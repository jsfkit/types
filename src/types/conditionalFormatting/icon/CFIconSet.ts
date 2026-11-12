import type { CFIcon } from './CFIcon.ts';
import type { CFIconSetName } from './CFIconSetName.ts';
import type { CFIconThreshold } from './CFIconThreshold.ts';

/**
 * Icon set settings.
 *
 * Note that the actual icons used for each icon set are left to individual implementations to
 * decide.
 *
 * @group ConditionalFormatting
 */
export type CFIconSet = {
  /**
   * Which built-in icon set to draw from. Ignored for icons overridden in `customIcons`.
   *
   * @default "3TrafficLights1"
   */
  name?: CFIconSetName;
  /**
   * Thresholds, lowest first. There is one per icon.
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
   * Per-threshold icon choices, in the same order as `thresholds`. Present when the icons are
   * picked individually rather than taken from `name`.
   */
  customIcons?: CFIcon[];
};
