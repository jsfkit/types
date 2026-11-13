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
   * The icons to draw from. This is either the name of a built-in icon set, or a list of icons
   * picked individually from any of the built-in sets.
   *
   * If this is a list, it has one icon per threshold in the same order as `thresholds`.
   */
  set: CFIconSetName | CFIcon[];
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
};
