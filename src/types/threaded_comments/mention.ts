import type { integer } from '../integer';

/**
 * A mention of a person within a threaded comment's text.
 */
export type Mention = {
  /** Unique identifier of the person being mentioned. Use this to find the person's details in a
   * {@link Workbook.people | workbook's list of people}.
   *
   * Excel always uses a UUID in the format `{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`, but JSF makes
   * no strict requirement.
   */
  personId: string;
  /** Starting character position of the mention in the text. */
  start: integer;
  /** Ending character position of the mention in the text. */
  end: integer;
};
