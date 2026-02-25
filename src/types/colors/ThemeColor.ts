/** Reference to a theme colour. */

/**
 * Reference to a theme colour.
 *
 * A theme colour is defined in the workbook's theme. Theme colours are used to ensure a consistent
 * palette across a workbook.
 */
export type ThemeColor = {
  type: 'scheme';
  /**
   * Theme colour name.
   *
   * Must be one of a limited set of values. The actual colour that matches the name is defined
   * elsewhere in the theme.
   */
  value:
    'bg1' |
    'tx1' |
    'bg2' |
    'tx2' |
    'accent1' |
    'accent2' |
    'accent3' |
    'accent4' |
    'accent5' |
    'accent6' |
    'hlink' |
    'folHlink' |
    'phClr' |
    'dk1' |
    'lt1' |
    'dk2' |
    'lt2';
};
