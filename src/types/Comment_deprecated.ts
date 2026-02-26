/**
 * A cell comment.
 *
 * @deprecated Use {@link Note | notes} and {@link ThreadedComment | threaded comments} instead.
 * @group Workbooks
 */
export type Comment = {
  /** Author of the comment. */
  a: string;
  /** Date of the comment (as an ISO formatted string). */
  d: string;
  /** The text content of the comment. */
  t: string;
};
