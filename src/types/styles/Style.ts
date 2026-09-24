import type { integer } from '../integer.ts';
import type { PixelValue } from '../PixelValue.ts';
import type { BorderStyle } from './BorderStyle.ts';
import type { Color } from '../colors/Color.ts';
import type { HAlign } from './HAlign.ts';
import type { PatternStyle } from './PatternStyle.ts';
import type { Underline } from './Underline.ts';
import type { VAlign } from './VAlign.ts';

/**
 * Style rules that specify the visual presentation of a cell.
 *
 * @group Workbooks
 */
export type Style = {
  /**
   * The name of the font family used to render text, e.g. `"Arial"`.
   *
   * @default "Calibri"
   */
  fontFamily?: string;
  /**
   * Identifies the font scheme, if any, to which this style's font belongs.
   *
   * When set, the {@link Style.fontFamily} property is ignored and the font is instead resolved by
   * the workbook theme. `"major"` maps to the theme's heading font and `"minor"` to the body font.
   * The actual typeface is determined by the theme's {@link ThemeFontCollection} at render time.
   *
   * When the theme changes, an application is expected to update the fonts associated with a scheme
   * automatically.
   *
   * It is an error to set this when a workbook has no theme.
   *
   * @see {@link Workbook.theme}
   * @see {@link Theme.fontScheme}
   * @see {@link ThemeFontScheme}
   * @see {@link ThemeFontCollection}
   */
  fontScheme?: 'major' | 'minor';
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
   *
   * @min 0
   * @max 255
   * @defaultValue 0
   */
  textRotation?: integer;
  /**
   * Formatting directions for rendering the cell's value to text.
   *
   * When this value is a string, it is as a standard Excel [number format pattern](https://support.microsoft.com/en-us/excel/review-guidelines-for-customizing-a-number-format).
   *
   * When the format is a number it is one of Excels built in 59 formats. These vary by the
   * locale the workbook is currently running in so it is beyond this spec to list them all.
   * The `en-US` table is as follows:
   *
   * | ID | Format
   * |--- |---
   * | 0 | `General`
   * | 1 | `0`
   * | 2 | `0.00`
   * | 3 | `#,##0`
   * | 4 | `#,##0.00`
   * | 5 | `$#,##0_);($#,##0)`
   * | 6 | `$#,##0_);[Red]($#,##0)`
   * | 7 | `$#,##0.00_);($#,##0.00)`
   * | 8 | `$#,##0.00_);[Red]($#,##0.00)`
   * | 9 | `0%`
   * | 10 | `0.00%`
   * | 11 | `0.00E+00`
   * | 12 | `# ?/?`
   * | 13 | `# ??/??`
   * | 14 | `m/d/yyyy`
   * | 15 | `d-mmm-yy`
   * | 16 | `d-mmm`
   * | 17 | `mmm-yy`
   * | 18 | `h:mm AM/PM`
   * | 19 | `h:mm:ss AM/PM`
   * | 20 | `h:mm`
   * | 21 | `h:mm:ss`
   * | 22 | `m/d/yyyy h:mm`
   * | 23-26 | `General`
   * | 27-31 | `m/d/yyyy`
   * | 32-35 | `h:mm:ss`
   * | 36 | `m/d/yyyy`
   * | 37 | `#,##0_);(#,##0)`
   * | 38 | `#,##0_);[Red](#,##0)`
   * | 39 | `#,##0.00_);(#,##0.00)`
   * | 40 | `#,##0.00_);[Red](#,##0.00)`
   * | 41 | `_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)`
   * | 42 | `_($* #,##0_);_($* (#,##0);_($* "-"_);_(@_)`
   * | 43 | `_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)`
   * | 44 | `_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)`
   * | 45 | `mm:ss`
   * | 46 | `[h]:mm:ss`
   * | 47 | `mm:ss.0`
   * | 48 | `##0.0E+0`
   * | 49 | `@`
   * | 50-58 | `m/d/yyyy`
   */
  numberFormat?: string | integer;
  /**
   * Name of the named style this style inherits from (e.g. "Percent", "Heading 1").
   * Refers to a key in {@link Workbook.namedStyles}.
   * When absent, the style inherits from the default style (typically "Normal").
   */
  extendsStyle?: string;
  /**
   * Whether the a cell should appear as a pivot-table button header (typically shown with a
   * dropdown-arrow filter UI, e.g. on "Row Labels" / "Column Labels").
   *
   * Should be set only on cell styles used in a pivot table's layout.
   */
  pivotButton?: boolean;
};
