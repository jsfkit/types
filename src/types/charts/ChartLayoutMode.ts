/**
 * How a manual layout coordinate is interpreted.
 *
 * | Mode     | For `x` and `y`                              | For `w` and `h`
 * |----------|----------------------------------------------|----------------------------------
 * | `edge`   | Position of the element's left or top edge.  | Position of its right or bottom edge.
 * | `factor` | Offset from the element's automatic position.| The element's width or height.
 *
 * @group Charts
 */
export type ChartLayoutMode = 'edge' | 'factor';
