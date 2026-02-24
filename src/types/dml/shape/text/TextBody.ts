import type { DmlAngle } from '../../DmlAngle.ts';
import type { PositiveCoordinate } from '../../PositiveCoordinate.ts';
import type { InsetRect } from './InsetRect.ts';
import type { Paragraph } from './Paragraph.ts';
import type { TextAnchoring } from './TextAnchoring.ts';
import type { TextHorzOverflow } from './TextHorzOverflow.ts';
import type { TextVerticalType } from './TextVerticalType.ts';
import type { TextVertOverflow } from './TextVertOverflow.ts';
import type { TextWrapping } from './TextWrapping.ts';

// This type purposely omits these boolean attributes:
//   compatLnSpc -- Use compatible line spacing calculations for legacy documents
//   fromWordArt -- Textbox was converted text from a WordArt object
//   forceAA     -- Force anti-aliasing for text rendering

/**
 * Text body container.
 *
 * Defines the text content within a shape, including paragraphs and formatting properties
 * such as alignment, overflow behavior, columns, rotation, and insets.
 */
export type TextBody = {
  /**
   * Vertical anchoring/alignment of text within the shape.
   * @defaultValue "t"
   */
  anchor?: TextAnchoring,

  /**
   * Whether text is centered at the anchor point.
   * @defaultValue false
   */
  anchorCtr?: boolean,

  /**
   * Number of text columns.
   * @defaultValue 1
   */
  numCol?: number,

  /**
   * Text rotation in 60,000ths of a degree (e.g., 5400000 = 90 degrees).
   * @defaultValue 0
   */
  rot?: DmlAngle,

  /**
   * Whether columns flow right-to-left.
   * @defaultValue false
   */
  rtlCol?: boolean,

  /**
   * Spacing between columns in EMUs.
   * @defaultValue 0
   */
  spcCol?: PositiveCoordinate,

  /**
   * Whether to apply spacing before first and after last paragraph.
   * @defaultValue false
   */
  spcFirstLastPara?: boolean,

  /**
   * Keep text upright regardless of shape rotation.
   * @defaultValue false
   */
  upright?: boolean,

  /**
   * Text orientation is vertical (top-to-bottom).
   * @defaultValue "horz"
   */
  vert?: TextVerticalType,

  /**
   * Horizontal overflow behavior.
   * @defaultValue "overflow"
   */
  horzOverflow?: TextHorzOverflow,

  /**
   * Vertical overflow behavior.
   * @defaultValue "overflow"
   */
  vertOverflow?: TextVertOverflow,

  /**
   * Text wrapping behavior.
   * @defaultValue "square"
   */
  wrap?: TextWrapping,

  /**
   * Defines an inset or internal margins for a text box within a shape.
   */
  inset?: InsetRect,

  /** Array of paragraphs containing the text content. */
  p: Paragraph[],
};
