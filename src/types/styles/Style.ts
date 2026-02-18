import type { PixelValue } from '../PixelValue.ts';
import type { BorderStyle } from './BorderStyle.ts';
import type { Color } from './Color.ts';
import type { HAlign } from './HAlign.ts';
import type { PatternStyle } from './PatternStyle.ts';
import type { Underline } from './Underline.ts';
import type { VAlign } from './VAlign.ts';

/**
 * Style rules that specify the visual presentation of a cell.
 */
export type Style = {
  /**
   * The name of the font family used to render text, e.g. `"Arial"`.
   *
   * @default "Calibri"
   */
  fontFamily?: string;
  /**
   * The font size in pixels.
   *
   * @default 11
   */
  fontSize?: PixelValue;
  /**
   * The color used to render text.
   *
   * @default "#000"
   */
  color?: Color;
  /**
   * Indicates whether the text is bold.
   *
   * @default false
   */
  bold?: boolean;
  /**
   * Indicates whether the text is italic.
   *
   * @default false
   */
  italic?: boolean;
  /**
   * Text underline decoration type.
   *
   * @default "none"
   */
  underline?: Underline;
  /**
   * The cell's background color.
   *
   * @default "#FFFFFF"
   */
  fillColor?: Color;
  /**
   * The color of a cell's background fill.
   *
   * @default "#000000"
   */
  patternColor?: Color;
  /**
   * The style of a cell's background fill.
   *
   * @default "none"
   */
  patternStyle?: PatternStyle;
  /**
   * Top border style.
   *
   * @default "none"
   */
  borderTopStyle?: BorderStyle;
  /**
   * Top border color.
   */
  borderTopColor?: Color;
  /**
   * Left border style.
   *
   * @default "none"
   */
  borderLeftStyle?: BorderStyle;
  /**
   * Left border color.
   */
  borderLeftColor?: Color;
  /**
   * Bottom border style.
   *
   * @default "none"
   */
  borderBottomStyle?: BorderStyle;
  /**
   * Bottom border color.
   */
  borderBottomColor?: Color;
  /**
   * Right border style.
   *
   * @default "none"
   */
  borderRightStyle?: BorderStyle;
  /**
   * Right border color.
   */
  borderRightColor?: Color;
  /**
   * Horizontal alignment of the cells [text] content.
   *
   * @default "general"
   */
  horizontalAlignment?: HAlign;
  /**
   * Vertical alignment of the cells [text] content.
   *
   * @default "bottom"
   */
  verticalAlignment?: VAlign;
  /**
   * Indicates whether text should be wrapped when it exceeds the cell's width.
   *
   * @default false
   */
  wrapText?: boolean;
  /**
   * Indicates whether the font-size should be automatically reduced in order to make the contents
   * of the cell visible.
   */
  shrinkToFit?: boolean;
  /**
   * The degrees to which the cell text should be rotated. Values range from 0 to 180, and 255 to
   * indicate vertical text. The origin of the rotation is the first letter of the text.
   */
  textRotation?: boolean;
  /**
   * Formatting directions for rendering the cell's value to text.
   */
  numberFormat?: string;
};
