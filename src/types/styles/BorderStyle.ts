/**
 * The style to use when drawing a cell border. If the worksheet's zoom factor is changed the width
 * of the border is expected to stay the same.
 *
 * @group Workbooks
 */
export type BorderStyle =
  /** No border is drawn.*/
  'none' |
  /** Equivalent to SVG `stroke-dasharray="4 1 2 1"`, at a 1px width.*/
  'dashDot' |
  /** Equivalent to SVG `stroke-dasharray="4 1 2 1 2 1"`, at a 1px width.*/
  'dashDotDot' |
  /** Equivalent to SVG `stroke-dasharray=""3 1`, at a 1px width.*/
  'dashed' |
  /** Equivalent to SVG `stroke-dasharray="1"`, at a 1px width.*/
  'dotted' |
  /** Draw two 1px wide continuous parallel lines with a 1px gap between them.*/
  'double' |
  /** Draw a 1px wide pixel continuous hairline.*/
  'hair' |
  /** Draw a 2px wide pixel continuous line.*/
  'medium' |
  /** Equivalent to SVG `stroke-dasharray="4 1 2 1"`, at a 2px width.*/
  'mediumDashDot' |
  /** Equivalent to SVG `stroke-dasharray="4 1 2 1 2 1"`, at a 2px width.*/
  'mediumDashDotDot' |
  /** Equivalent to SVG `stroke-dasharray=""3 1`, at a 2px width.*/
  'mediumDashed' |
  /**
   * Draw two 1px parallel dashed lines where the lower/left line 1px "behind" the other, creating
   * a slant.
   */
  'slantDashDot' |
  /** Draw a 3px wide pixel continuous line.*/
  'thick' |
  /** Draw a 1px wide pixel continuous line.*/
  'thin';
