import type { CellId } from '../cell_id';
import type { GUID } from '../guid';
import type { Mention } from './mention';
import type { ThreadedCommentHyperlink } from './threaded_comment_hyperlink';

/**
 * A threaded comment that is attached to an individual cell.
 */
export type ThreadedComment = {
  /** Unique identifier for the comment. */
  id: GUID;
  /** Unique identifier of the parent comment, if this is a reply in a thread. */
  parentId?: GUID;
  /** A1-style reference to the cell this comment is attached to. */
  ref: CellId;
  /** Date and time the comment was written, as an ISO formatted string. */
  datetime?: string;
  /** Unique identifier of the person being mentioned. Use this to find the person's details in a
   * {@link Workbook.people | workbook's list of people}.
   */
  personId: GUID;
  /** The comment text content. */
  text: string;
  /** Whether the comment is marked as done/resolved. */
  done?: boolean;
  /** Mentions contained within the comment. */
  mentions?: Mention[];
  /** Hyperlinks contained within the comment. */
  hyperlinks?: ThreadedCommentHyperlink[];
};
