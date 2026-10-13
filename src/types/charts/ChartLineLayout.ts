/**
 * Settings for line plots.
 *
 * @group Charts
 */
export type ChartLineLayout = {
  // This is the line chart's OOXML `c:marker` flag.
  /**
   * Whether the plot's series show markers by default. Excel sets this from the chart subtype
   * ("Line" or "Line with Markers"). A series' own {@link ChartSeries.marker} decides what's
   * actually drawn.
   *
   * @default false
   */
  showMarkers?: boolean;
};
