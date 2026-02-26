import type { TextRun } from './TextRun.ts';

/**
 * A {@link TextRun | text run} representing a hyperlink within a threaded comment's text.
 *
 * @group Workbooks
 */
export type HyperlinkTextRun = TextRun & {
  /** Discriminator to identify this as a hyperlink text run. */
  type: 'hyperlink';
  /** The URL that the hyperlink points to. */
  url: string;
};
