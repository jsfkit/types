/**
 * The name of a built-in icon set.
 *
 * The `NoIcons` value is a special case:
 *
 * - When {@link CFIconSet.set} is an array, `NoIcons` is used for thresholds that should have no
 *   icon.
 * - When {@link CFIconSet.set} is a string and `NoIcons` is used as the set name, it shows no icons
 *   at all.
 *
 * @group ConditionalFormatting
 */
export type CFIconSetName =
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
