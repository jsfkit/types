/**
 * Line dash style.
 *
 * | Value           | Appearance
 * |-----------------|---------------------------------------------
 * | `dash`          | Equivalent to SVG dashArray of `[4,4]`
 * | `dashDot`       | Equivalent to SVG dashArray of `[4,3,1,3]`
 * | `dot`           | Equivalent to SVG dashArray of `[1,3]`
 * | `lgDash`        | Equivalent to SVG dashArray of `[8,3]`
 * | `lgDashDot`     | Equivalent to SVG dashArray of `[8,3,1,3]`
 * | `lgDashDotDot`  | Equivalent to SVG dashArray of `[8,3,1,3,1,3]`
 * | `solid`         | Equivalent to SVG dashArray of `null`
 * | `sysDash`       | Equivalent to SVG dashArray of `[3,1]`
 * | `sysDashDot`    | Equivalent to SVG dashArray of `[3,1,1,1]`
 * | `sysDashDotDot` | Equivalent to SVG dashArray of `[3,1,1,1,1,1,1]`
 * | `sysDot`        | Equivalent to SVG dashArray of `[1,1]`
 *
 * @group Drawings
 */
export type LineStyle =
  'dash' |
  'dashDot' |
  'dot' |
  'lgDash' |
  'lgDashDot' |
  'lgDashDotDot' |
  'solid' |
  'sysDash' |
  'sysDashDot' |
  'sysDashDotDot' |
  'sysDot';
