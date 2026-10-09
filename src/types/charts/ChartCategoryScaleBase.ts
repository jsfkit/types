/**
 * Settings shared by the scales a category axis can use: `band` and `point` (a text axis) and
 * `time` (a date axis).
 *
 * @group Charts
 */
export type ChartCategoryScaleBase = {
  /**
   * Whether the scale type was chosen automatically from the data. This is Excel's "Automatically
   * select based on data" axis type, OOXML `c:auto`.
   *
   * The scale's `type` is always the type currently in effect, so a renderer uses it as it is.
   * When `auto` is `true`, an application that changes the data chooses the type again: a
   * `time` scale when the category values are dates, otherwise a `band` or `point` scale. When
   * it's `false`, the type is fixed, like Excel's "Text axis" and "Date axis" choices.
   *
   * @default false
   */
  auto?: boolean;
};
