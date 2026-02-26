/**
 * The style of fill pattern used for a cell background. If the worksheets zoom factor is changed
 * the pixel scale of the pattern is still expected to stay the same.
 *
 * @group Workbooks
 */
export type PatternStyle =
  'none' |
  'solid' |
  'mediumGray' |
  'darkGray' |
  'lightGray' |
  'darkHorizontal' |
  'darkVertical' |
  'darkDown' |
  'darkUp' |
  'darkGrid' |
  'darkTrellis' |
  'lightHorizontal' |
  'lightVertical' |
  'lightDown' |
  'lightUp' |
  'lightGrid' |
  'lightTrellis' |
  'gray125' |
  'gray0625';
