import type { CellId } from './cell_id';

/**
 * An annotation associated with a cell.
 *
 * There is a maximum of one note per cell, and there is no way to reply to a note. For cell
 * annotations with replies, see {@link ThreadedComment} and {@link Worksheet.comments}.
 */
export type Note = {
  /** Cell to which the note is attached (e.g. A1, E24). */
  ref: CellId;
  /** Name of the person who originally made this note. */
  author: string;
  /** Body text of the note. */
  text: string;
};
