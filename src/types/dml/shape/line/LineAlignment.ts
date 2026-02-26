/**
 * Determines the alignment of a line stroke against its shape path.
 *
 * | Value    | Presentation
 * |----------|-------
 * | `center` | Stroke is centered on the path.
 * | `inside` | Stroke is drawn inside the path.
 *
 * These have been altered from DrawingML which used "ctr" for `center`, and "in" for `inside`.
 *
 * @group Drawings
 */
export type LineAlignment = 'center' | 'inside';
