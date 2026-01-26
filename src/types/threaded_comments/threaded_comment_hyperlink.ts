import type { integer } from '../integer';

/**
 * A hyperlink within a threaded comment's text.
 */
export type ThreadedCommentHyperlink = {
  /** The URL that the hyperlink points to. */
  url: string;
  /** The starting position of the hyperlink in the comment text. */
  start: integer;
  /** The ending position of the hyperlink in the comment text. */
  end: integer;
};
