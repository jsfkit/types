/**
 * A part of a data label's generated text.
 *
 * | Value        | Shows
 * |--------------|----------------------------------------------------------------
 * | `value`      | The point's value (the Y value in scatter and bubble charts).
 * | `category`   | The point's category (the X value in scatter and bubble charts).
 * | `series`     | The series name.
 * | `percent`    | The point's share of the total, in pie and doughnut charts.
 * | `bubbleSize` | The bubble size, in bubble charts.
 * | `legendKey`  | The series' legend key, next to the label.
 * | `cellRange`  | The point's value in the series' `text` encoding field ("Value From Cells").
 *
 * @group Charts
 */
export type ChartDataLabelContent =
  'value' |
  'category' |
  'series' |
  'percent' |
  'bubbleSize' |
  'legendKey' |
  'cellRange';
