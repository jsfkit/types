/**
 * Rectangle alignment position.
 *
 * Defines the alignment point within a rectangle, using a 3x3 grid:
 *
 * | Value | Position       |
 * |-------|----------------|
 * | `b`   | Bottom center  |
 * | `bl`  | Bottom left    |
 * | `br`  | Bottom right   |
 * | `ctr` | Center         |
 * | `l`   | Middle left    |
 * | `r`   | Middle right   |
 * | `t`   | Top center     |
 * | `tl`  | Top left       |
 * | `tr`  | Top right      |
 *
 * @group Drawings
 */
export type RectAlignment = 'b' | 'bl' | 'br' | 'ctr' | 'l' | 'r' | 't' | 'tl' | 'tr';
