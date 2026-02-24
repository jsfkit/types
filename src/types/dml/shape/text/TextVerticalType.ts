/**
 * If there is vertical text, determines what type of vertical text is going to be used.
 *
 * | Value            | Behavior
 * |------------------|------------------------------
 * | `horz`           | Horizontal text (default).
 * | `vert`           | Line are rotated 90° clockwise, ordered from top to bottom.
 * | `vert270`        | Lines are rotated 270° clockwise, ordered from bottom to top.
 * | `wordArtVert`    | One letter on top of another.
 * | `wordArtVertRtl` | Vertical WordArt should be shown from right to left.
 * | `eaVert`         | Some fonts are rotated by 90° while some (East Asian) are shown vertically.
 * | `mongolianVert`  | `eaVert` but the text flows top down then LEFT RIGHT, instead of RIGHT LEFT.
 */
export type TextVerticalType =
  'horz' |
  'vert' |
  'vert270' |
  'wordArtVert' |
  'eaVert' |
  'mongolianVert' |
  'wordArtVertRtl';
