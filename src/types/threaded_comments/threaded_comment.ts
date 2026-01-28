import type { CellId } from '../cell_id';
import type { HyperlinkTextRun } from './hyperlink_text_run';
import type { MentionTextRun } from './mention_text_run';

/**
 * A threaded comment that is attached to an individual cell.
 */
export type ThreadedComment = {
  /**
   * Unique identifier for the comment.
   *
   * Excel always uses a UUID in the format `{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`, but JSF makes
   * no strict requirement.
   */
  id: string;
  /**
   * Unique identifier of the parent comment, if this is a reply in a thread.
   *
   * Excel always uses a UUID in the format `{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`, but JSF makes
   * no strict requirement.
   */
  parentId?: string;
  /** A1-style reference to the cell this comment is attached to. */
  ref: CellId;
  /** Date and time the comment was written, as an ISO formatted string. */
  datetime?: string;
  /**
   * Unique identifier of the person who authored this comment. Use this to find the person's
   * details in a {@link Workbook.people | workbook's list of people}.
   *
   * Excel always uses a UUID in the format `{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`, but JSF makes
   * no strict requirement.
   */
  personId: string;
  /** The comment text content. */
  text: string;
  /** Whether the comment has been marked as resolved. */
  resolved?: boolean;
  /** {@link TextRun | Text runs} that annotate ranges within the comment text. */
  runs?: (MentionTextRun | HyperlinkTextRun)[];
};
