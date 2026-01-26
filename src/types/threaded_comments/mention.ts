import type { GUID } from '../guid';
import type { integer } from '../integer';

/**
 * A mention of a person within a threaded comment's text.
 */
export type Mention = {
  /** Unique identifier for this mention */
  id: GUID;
  /** Unique identifier of the person being mentioned. Use this to find the person's details in a
   * {@link Workbook.people | workbook's list of people}.
   */
  personId: GUID;
  /** Starting character position of the mention in the text. */
  start: integer;
  /** Ending character position of the mention in the text. */
  end: integer;
};
