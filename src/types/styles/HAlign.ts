/**
 * Specifies the horizontal alignment of content (text) within a container (cell).
 *
 * @group Workbooks
 */
export type HAlign =
  /**
   * The horizontal alignment is general-aligned. Text data is left-aligned. Numbers, dates, and
   * times are right- aligned. Boolean types are centered.
   */
  'general' |
  /** Aligns content at the left edge of the cell (even in RTL mode). */
  'left' |
  /** The horizontal alignment is centered, meaning the text is centered across the cell. */
  'center' |
  /** Aligns content at the right edge of the cell (even in RTL mode). */
  'right' |
  /**
   * Indicates that the value of the cell should be filled across the entire width of the cell. If
   * blank cells to the right also have the fill alignment, they are also filled with the value,
   * using a convention similar to `centerContinuous`.
   */
  'fill' |
  /**
   * For each line of text, aligns each line of the wrapped text in a cell to the right and left
   * (except the last line).
   */
  'justify' |
  /** The horizontal alignment is centered across multiple cells. */
  'centerContinuous' |
  /**
   * Indicates that each 'word' in each line of text inside the cell is evenly distributed across
   * the width of the cell, with flush right and left margins.
   */
  'distributed';
