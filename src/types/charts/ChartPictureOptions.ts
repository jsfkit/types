/**
 * How a picture fill is applied to a bar, area, or wall.
 *
 * The picture itself is the element's `BlipFill`. These options control how it's placed.
 *
 * @group Charts
 */
export type ChartPictureOptions = {
  /**
   * | Value        | Placement
   * |--------------|----------------------------------------------------------------
   * | `stretch`    | Stretch one copy of the picture to fill the element.
   * | `stack`      | Repeat the picture at its own size.
   * | `stackScale` | Repeat the picture once for every `pictureStackUnit` of value.
   *
   * @default "stretch"
   */
  pictureFormat?: 'stretch' | 'stack' | 'stackScale';

  /**
   * The value each picture copy represents, when `pictureFormat` is `stackScale`.
   *
   * @default 1
   */
  pictureStackUnit?: number;

  /**
   * In a 3D chart, whether the picture is applied to the front of the bar.
   *
   * @default true
   */
  applyToFront?: boolean;

  /**
   * In a 3D chart, whether the picture is applied to the sides of the bar.
   *
   * @default true
   */
  applyToSides?: boolean;

  /**
   * In a 3D chart, whether the picture is applied to the ends of the bar.
   *
   * @default true
   */
  applyToEnd?: boolean;
};
