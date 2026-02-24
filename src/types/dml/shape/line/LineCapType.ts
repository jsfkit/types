/**
 * Determines how line endpoints are rendered. This is the same as SVG's `stroke-linecap` property.
 *
 * | Value    | Presentation
 * |----------|------------------------------------------------
 * | `butt`   | Stroke does not extend beyond its endpoints. Zero length line will not be rendered.
 * | `round`  | Stroke is extended by a half circle with a diameter equal to the line width.
 * | `square` | Ends of the stroke will be extended by a rectangle half the width of the stroke.
 *
 * These have been altered from DrawingML which used "flat" for `butt`, "rnd" for `round`,
 * and "sq" for `square`.
 */
export type LineCapType = 'butt' | 'rnd' | 'sq';
