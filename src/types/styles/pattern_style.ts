export type PATTERN_STYLE_NONE = 'none';
export type PATTERN_STYLE_SOLID = 'solid';
export type PATTERN_STYLE_MEDIUM_GRAY = 'mediumGray';
export type PATTERN_STYLE_DARK_GRAY = 'darkGray';
export type PATTERN_STYLE_LIGHT_GRAY = 'lightGray';
export type PATTERN_STYLE_DARK_HORIZONTAL = 'darkHorizontal';
export type PATTERN_STYLE_DARK_VERTICAL = 'darkVertical';
export type PATTERN_STYLE_DARK_DOWN = 'darkDown';
export type PATTERN_STYLE_DARK_UP = 'darkUp';
export type PATTERN_STYLE_DARK_GRID = 'darkGrid';
export type PATTERN_STYLE_DARK_TRELLIS = 'darkTrellis';
export type PATTERN_STYLE_LIGHT_HORIZONTAL = 'lightHorizontal';
export type PATTERN_STYLE_LIGHT_VERTICAL = 'lightVertical';
export type PATTERN_STYLE_LIGHT_DOWN = 'lightDown';
export type PATTERN_STYLE_LIGHT_UP = 'lightUp';
export type PATTERN_STYLE_LIGHT_GRID = 'lightGrid';
export type PATTERN_STYLE_LIGHT_TRELLIS = 'lightTrellis';
export type PATTERN_STYLE_GRAY125 = 'gray125';
export type PATTERN_STYLE_GRAY0625 = 'gray0625';

/**
 * The style of fill pattern used for a cell background. If the worksheets zoom factor is changed the pixel
 * scale of the pattern is still expected to stay the same.
 */
export type PatternStyle =
  | PATTERN_STYLE_NONE |
  PATTERN_STYLE_SOLID |
  PATTERN_STYLE_MEDIUM_GRAY |
  PATTERN_STYLE_DARK_GRAY |
  PATTERN_STYLE_LIGHT_GRAY |
  PATTERN_STYLE_DARK_HORIZONTAL |
  PATTERN_STYLE_DARK_VERTICAL |
  PATTERN_STYLE_DARK_DOWN |
  PATTERN_STYLE_DARK_UP |
  PATTERN_STYLE_DARK_GRID |
  PATTERN_STYLE_DARK_TRELLIS |
  PATTERN_STYLE_LIGHT_HORIZONTAL |
  PATTERN_STYLE_LIGHT_VERTICAL |
  PATTERN_STYLE_LIGHT_DOWN |
  PATTERN_STYLE_LIGHT_UP |
  PATTERN_STYLE_LIGHT_GRID |
  PATTERN_STYLE_LIGHT_TRELLIS |
  PATTERN_STYLE_GRAY125 |
  PATTERN_STYLE_GRAY0625;
