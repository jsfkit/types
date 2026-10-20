/**
 * Shape of the bars in a 3D bar chart.
 *
 * | Value          | Shape
 * |----------------|------------------------------------------------------------
 * | `box`          | A rectangular box.
 * | `cylinder`     | A cylinder.
 * | `cone`         | A cone that comes to a point at each bar's value.
 * | `coneToMax`    | A cone pointed at the axis maximum, cut off at the bar's value.
 * | `pyramid`      | A pyramid that comes to a point at each bar's value.
 * | `pyramidToMax` | A pyramid pointed at the axis maximum, cut off at the bar's value.
 *
 * @group Charts
 */
export type ChartBarShape = 'box' | 'cylinder' | 'cone' | 'coneToMax' | 'pyramid' | 'pyramidToMax';
