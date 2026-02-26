/**
 * Specifies the compound type that is to be used for lines.
 *
 * | Value       | Rendered as
 * |-------------|---------------------------
 * | `dbl`       | Double lines of equal width
 * | `sng`       | Single line
 * | `thickThin` | Double lines: one thick, one thin
 * | `thinThick` | Double lines: one thin, one thick
 * | `tri`       | Three lines: thin, thick, thin
 *
 * @group Drawings
 */
export type LineCompoundType = 'dbl' | 'sng' | 'thickThin' | 'thinThick' | 'tri';
