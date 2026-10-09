/**
 * Text shown in a chart, such as a title or a series name.
 *
 * The text is either literal, in `text`, or taken from a cell through `formula`. With a formula,
 * `text` is only an optional cache of the cell's text, which can be missing or out of date: a
 * renderer evaluates the formula.
 *
 * Rich text follows JSF's progressive enhancement model: the plain text is always in `text`, and
 * JSF will add an optional `runs` property next to it, describing runs of formatting over ranges
 * of `text`. So:
 *
 * - Anywhere OOXML allows rich text, JSFChart uses a `ChartText` object, never a bare string.
 * - The name `runs` is reserved. Nothing in `ChartText`, or in types that extend it, may use it
 *   for anything else.
 * - Runs describe literal text. Text that comes from a cell through `formula` is plain in OOXML.
 *
 * @group Charts
 */
export type ChartText = {
  /**
   * Plain text. Paragraphs are separated by line feeds (`\n`), which count toward run offsets.
   * When `formula` is present, this is only an optional cache of the cell's text.
   */
  text?: string;

  /** A reference to the cell that the text comes from, for example `Sheet1!$B$1`. */
  formula?: string;
};
