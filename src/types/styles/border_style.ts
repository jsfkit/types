/**
 * The style to use when drawing a cell border. If the worksheet's zoom factor is changed the width
 * of the border is expected to stay the same.
 *
 * - `none`: no border is drawn.
 * - `dashDot`: equivalent to SVG `stroke-dasharray="4 1 2 1"`, at a 1px width.
 * - `dashDotDot`: equivalent to SVG `stroke-dasharray="4 1 2 1 2 1"`, at a 1px width.
 * - `dashed`: equivalent to SVG `stroke-dasharray=""3 1`, at a 1px width.
 * - `dotted`: equivalent to SVG `stroke-dasharray="1"`, at a 1px width.
 * - `double`: draw two 1px wide continuous parallel lines with a 1px gap between them.
 * - `hair`: draw a 1px wide pixel continuous hairline.
 * - `medium`: draw a 2px wide pixel continuous line.
 * - `mediumDashDot`: equivalent to SVG `stroke-dasharray="4 1 2 1"`, at a 2px width.
 * - `mediumDashDotDot`: equivalent to SVG `stroke-dasharray="4 1 2 1 2 1"`, at a 2px width.
 * - `mediumDashed`: equivalent to SVG `stroke-dasharray=""3 1`, at a 2px width.
 * - `slantDashDot`: draw two 1px parallel dashed lines where the lower/left line 1px "behind" the
 *   other, creating a slant.
 * - `thick`: draw a 3px wide pixel continuous line.
 * - `thin`: draw a 1px wide pixel continuous line.
 */
export type BorderStyle =
  'none' |
  'dashDot' |
  'dashDotDot' |
  'dashed' |
  'dotted' |
  'double' |
  'hair' |
  'medium' |
  'mediumDashDot' |
  'mediumDashDotDot' |
  'mediumDashed' |
  'slantDashDot' |
  'thick' |
  'thin';
