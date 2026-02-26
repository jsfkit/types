import type { integer } from '../integer.ts';

/**
 * Base type for text runs that annotate ranges within threaded comment text.
 *
 * A text run identifies a contiguous range of characters in the comment text, specified by
 * zero-indexed start and end positions. Text runs allow metadata to be attached to specific
 * portions of text, enabling features such as hyperlinks, mentions, and formatting.
 *
 * ## How text runs work
 *
 * Each text run specifies a range within the comment text using `start` (inclusive) and `end`
 * (exclusive) character positions. For example, in the text "Hello @foo", a mention text run
 * for "@foo" would have `start: 6` and `end: 10`.
 *
 * Multiple text runs can exist within a single comment, allowing different types of annotations
 * to coexist (a mention and a hyperlink in the same text, for example).
 *
 * @see {@link MentionTextRun} for mentions of people
 * @see {@link HyperlinkTextRun} for hyperlinks
 * @group Workbooks
 */
export type TextRun = {
  /** Starting character position of the run in the text (zero-indexed). */
  start: integer;
  /** Ending character position of the run in the text (zero-indexed, exclusive). */
  end: integer;
};
