/**
 * Settings for scatter plots (`point` plots with X and Y values).
 *
 * @group Charts
 */
export type ChartScatterLayout = {
  /**
   * Excel's scatter chart subtype, OOXML `c:scatterStyle`.
   *
   * | Value          | Subtype
   * |----------------|--------------------------------------------
   * | `none`         | No lines or markers.
   * | `marker`       | Markers only.
   * | `line`         | Straight lines.
   * | `lineMarker`   | Straight lines and markers.
   * | `smooth`       | Smooth lines.
   * | `smoothMarker` | Smooth lines and markers.
   *
   * Each series' `marker`, `shape`, and `smooth` settings decide what's actually drawn. The
   * subtype is kept so it round-trips.
   *
   * @default "marker"
   */
  style?: 'none' | 'marker' | 'line' | 'lineMarker' | 'smooth' | 'smoothMarker';
};
