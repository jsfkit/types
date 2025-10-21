/** No border is drawn. */
export type BORDER_STYLE_NONE = "none";
/** A dash-dot border style. */
export type BORDER_STYLE_DASH_DOT = "dashDot";
/** A dash-dot-dot border style. */
export type BORDER_STYLE_DASH_DOT_DOT = "dashDotDot";
/** A dashed border style. */
export type BORDER_STYLE_DASHED = "dashed";
/** A dotted border style. */
export type BORDER_STYLE_DOTTED = "dotted";
/** Draw two parallel lines as a border. */
export type BORDER_STYLE_DOUBLE = "double";
/** A hairline border style. */
export type BORDER_STYLE_HAIR = "hair";
/** A medium border style. */
export type BORDER_STYLE_MEDIUM = "medium";
/** A medium dash-dot border style. */
export type BORDER_STYLE_MEDIUM_DASH_DOT = "mediumDashDot";
/** A medium dash-dot-dot border style. */
export type BORDER_STYLE_MEDIUM_DASH_DOT_DOT = "mediumDashDotDot";
/** A medium dashed border style. */
export type BORDER_STYLE_MEDIUM_DASHED = "mediumDashed";
/** A slant dash-dot border style. */
export type BORDER_STYLE_SLANT_DASH_DOT = "slantDashDot";
/** A thick border style. */
export type BORDER_STYLE_THICK = "thick";
/** A thin border style. */
export type BORDER_STYLE_THIN = "thin";

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
  | BORDER_STYLE_NONE
  | BORDER_STYLE_DASH_DOT
  | BORDER_STYLE_DASH_DOT_DOT
  | BORDER_STYLE_DASHED
  | BORDER_STYLE_DOTTED
  | BORDER_STYLE_DOUBLE
  | BORDER_STYLE_HAIR
  | BORDER_STYLE_MEDIUM
  | BORDER_STYLE_MEDIUM_DASH_DOT
  | BORDER_STYLE_MEDIUM_DASH_DOT_DOT
  | BORDER_STYLE_MEDIUM_DASHED
  | BORDER_STYLE_SLANT_DASH_DOT
  | BORDER_STYLE_THICK
  | BORDER_STYLE_THIN;
