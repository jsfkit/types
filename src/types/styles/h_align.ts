/** Specifies general horizontal alignment, which varies based on the content type. */
export type H_ALIGN_GENERAL = 'general';
/** Specifies left horizontal alignment. */
export type H_ALIGN_LEFT = 'left';
/** Specifies center horizontal alignment. */
export type H_ALIGN_CENTER = 'center';
/** Specifies right horizontal alignment. */
export type H_ALIGN_RIGHT = 'right';
/** Specifies fill horizontal alignment. */
export type H_ALIGN_FILL = 'fill';
/** Specifies justify horizontal alignment. */
export type H_ALIGN_JUSTIFY = 'justify';
/** Specifies center continuous horizontal alignment. */
export type H_ALIGN_CENTER_CONTINUOUS = 'centerContinuous';
/** Specifies distributed horizontal alignment. */
export type H_ALIGN_DISTRIBUTED = 'distributed';

/**
 * Specifies the horizontal alignment of content (text) within a container (cell).
 *
 * - `center`: the horizontal alignment is centered, meaning the text is centered across the cell.
 * - `centerContinuous`: the horizontal alignment is centered across multiple cells.
 * - `distributed`: indicates that each 'word' in each line of text inside the cell is evenly
 *   distributed across the width of the cell, with flush right and left margins.
 * - `fill`: indicates that the value of the cell should be filled across the entire width of the
 *   cell. If blank cells to the right also have the fill alignment, they are also filled with the
 *   value, using a convention similar to `centerContinuous`.
 * - `general`: the horizontal alignment is general-aligned. Text data is left-aligned. Numbers,
 *   dates, and times are right- aligned. Boolean types are centered.
 * - `justify`: for each line of text, aligns each line of the wrapped text in a cell to the right
 *   and left (except the last line).
 * - `left`: aligns content at the left edge of the cell (even in RTL mode).
 * - `right`: aligns content at the right edge of the cell (even in RTL mode).
 */
export type HAlign =
  | H_ALIGN_GENERAL |
  H_ALIGN_LEFT |
  H_ALIGN_CENTER |
  H_ALIGN_RIGHT |
  H_ALIGN_FILL |
  H_ALIGN_JUSTIFY |
  H_ALIGN_CENTER_CONTINUOUS |
  H_ALIGN_DISTRIBUTED;
