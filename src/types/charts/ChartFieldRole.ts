/**
 * The role a field had in the source chart, before an importer normalized the data.
 *
 * This lets an exporter reconstruct the original series ranges, for example when a wide Excel
 * series layout was converted to a long table.
 *
 * @group Charts
 */
export type ChartFieldRole =
  'category' |
  'seriesName' |
  'value' |
  'x' |
  'y' |
  'size' |
  'open' |
  'high' |
  'low' |
  'close' |
  'label' |
  'color';
