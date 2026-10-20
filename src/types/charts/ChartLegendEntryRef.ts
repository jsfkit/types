import type { integer } from '../integer.ts';

// Note: A surface chart's value band entries can't be hidden:
//       Excel lets you delete one, but doesn't save it.

/**
 * Identifies one legend entry by what it shows.
 *
 * | Form                    | Entry
 * |-------------------------|---------------------------------------------------------------------
 * | `{ series }`            | A series.
 * | `{ series, point }`     | A point of a series, in a legend that lists points, such as a pie's.
 * | `{ series, trendline }` | A series' trendline, by its index in `trendlines`.
 *
 * `series` is a series' `id`, and `point` a zero-based point index.
 *
 * @group Charts
 */
export type ChartLegendEntryRef =
  { series: string } |
  { series: string; point: integer } |
  { series: string; trendline: integer };
