/**
 * The primary mark that a plot draws.
 *
 * The first group maps to primitive Vega marks. The second group is composite marks: they're
 * kept because they're useful editing concepts, and they compile to primitive marks.
 *
 * @group Charts
 */
export type ChartMark =
  'bar' |
  'line' |
  'area' |
  'point' |
  'arc' |
  'boxplot' |
  'candlestick' |
  'waterfall' |
  'treemap' |
  'sunburst' |
  'funnel' |
  'surface';
