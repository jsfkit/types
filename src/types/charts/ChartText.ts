// This type will be enchanced to rich text at a later point: the plain text is always in `text`,
// and we will add an optional `runs` property next to it, describing runs of formatting over ranges
// of `text`. So:
//
// - Anywhere a chart can show rich text, we use a `ChartText` object, never a single string.
// - The name `runs` is reserved.
//   Nothing in `ChartText`, or in types that extend it, may use it for anything else.
// - Runs describe literal text. Text that comes from a cell through `formula` is plain.

/**
 * Text shown in a chart, such as a title or a series name.
 *
 * The text is either literal, in `text`, or taken from a cell through `formula`. With a formula,
 * `text` is only an optional cache of the cell's text, which can be missing or out of date: a
 * renderer evaluates the formula.
 *
 * @group Charts
 */
export type ChartText = {
  /**
   * Plain text. Paragraphs are separated by line feeds (`\n`), which count toward run offsets.
   * When `formula` is present, this is only an optional cache of the cell's text.
   */
  text?: string;

  /**
   * A reference to the cell that the text comes from, for example `Sheet1!$B$1`.
   */
  formula?: string;
};
