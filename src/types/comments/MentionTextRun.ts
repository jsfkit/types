import type { TextRun } from './TextRun.ts';

/**
 * A {@link TextRun | text run} representing a mention of a person within a threaded comment's text.
 */
export type MentionTextRun = TextRun & {
  /** Discriminator to identify this as a mention text run. */
  type: 'mention';
  /**
   * Unique identifier of the person being mentioned. Use this to find the person's details in a
   * {@link Workbook.people | workbook's list of people}.
   *
   * Excel always uses a UUID in the format `{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`, but JSF makes
   * no strict requirement.
   */
  personId: string;
};
