/**
 * Script-specific supplemental font.
 */
export type ThemeSupplementalFont = {
  /**
   * ISO 15924 script code (e.g. `Egyp`, `Arab`).
   *
   * @see {@link https://en.wikipedia.org/wiki/ISO_15924}
   */
  script: string;
  /** Font face to use for this script. */
  typeface: string;
};
