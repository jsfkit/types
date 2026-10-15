import type { Shape } from '../dml/shape/Shape.ts';
import type { integer } from '../integer.ts';
import type { ChartAxis } from './ChartAxis.ts';
import type { ChartColorMap } from './ChartColorMap.ts';
import type { ChartDataSet } from './ChartDataSet.ts';
import type { ChartDataTable } from './ChartDataTable.ts';
import type { ChartDrawing } from './ChartDrawing.ts';
import type { ChartLegend } from './ChartLegend.ts';
import type { ChartPivot } from './ChartPivot.ts';
import type { ChartPlot } from './ChartPlot.ts';
import type { ChartPlotArea } from './ChartPlotArea.ts';
import type { ChartScale } from './ChartScale.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';
import type { ChartThemeOverride } from './ChartThemeOverride.ts';
import type { ChartTitle } from './ChartTitle.ts';
import type { ChartTransform } from './ChartTransform.ts';
import type { ChartView3D } from './ChartView3D.ts';
import type { ChartWall } from './ChartWall.ts';

/**
 * A chart: a semantic description of what a chart shows and how.
 *
 * A chart's data is secondary. Each field of each series is defined by a binding, usually a
 * formula. A renderer evaluates the bindings against the workbook to get the data. Values stored
 * next to a formula are only an optional cache, like a cell's `v` next to its `f`: the cache can be
 * missing or out of date, and a writer is free to leave it out. Only data without a formula
 * (literal data) is authoritative.
 *
 * Overrides, such as a point's `shape` over its series' `shape`, or a series' `labels` over its
 * plot's, set only what they change: each property an override leaves out comes from the object
 * it overrides. JSF values (`Fill`, `Line`, `Color`) and lists replace the inherited value whole.
 *
 * Charts are stored in {@link Workbook.charts}, keyed by ID. A drawing anchors a chart on a sheet
 * through {@link GraphicChart.chartId}, which is the key of the chart.
 *
 * All cross-references inside a chart (data, scales, axes) use IDs that are local to the chart.
 * Each ID is unique within its chart, among objects of the same kind:
 *
 * - Datasets and transforms share one set of IDs, because a plot's `data` and a transform's
 *   `source` can name either.
 * - Scales, axes, plots, and series each have their own set. Series IDs are unique across all of
 *   the chart's plots.
 *
 * @group Charts
 */
export type Chart = {
  /**
   * The chart title, at the top of the chart. When absent, the chart has no title.
   *
   * When present without `text` or `formula`, the title text is automatic, and a renderer
   * generates it: when the chart shows exactly one series and that series has a `name`, the series
   * name; otherwise "Chart Title". Hidden series don't count, a pie always shows one series, and a
   * generated name such as "Series1" isn't a name. Importers and exporters should keep the title
   * empty, and not attempt to fill in automatic text themselves.
   *
   * A chart title that doesn't set a font size of its own takes 1.2 times the size in
   * `textStyle`. Other elements take that size as it is.
   */
  title?: ChartTitle;

  /**
   * Datasets that plots read from.
   */
  data: ChartDataSet[];

  /**
   * Derived datasets. Each transform reads from a dataset or another transform through its
   * `source` property, so transforms form a directed acyclic graph.
   */
  transforms?: ChartTransform[];

  /**
   * Scales that map data values to positions and colors. Plots refer to them through their
   * encodings, and axes through their `scale`.
   */
  scales: ChartScale[];

  /**
   * Axes that draw the ticks, labels, and gridlines for the chart's scales. When absent, the chart
   * has no axes, as for a pie chart.
   */
  axes?: ChartAxis[];

  /**
   * The legend. When absent, the chart has no legend.
   */
  legend?: ChartLegend;

  /**
   * The chart's plots, in the order they were read from the source. An exporter writes them in
   * this order. The order also ranks chart types in the default legend (see
   * {@link ChartLegend.scale}).
   */
  plots: ChartPlot[];

  /**
   * A data table shown below the plot area. When absent, the chart has no data table.
   */
  dataTable?: ChartDataTable;

  /**
   * How to render empty cells in the source data.
   *
   * | Value  | Rendering
   * |--------|------------------------------------------------
   * | `gap`  | Leave a gap where the value would be.
   * | `zero` | Treat the value as zero.
   * | `span` | Connect the neighboring points (line charts).
   *
   * @default "gap"
   */
  showBlanksAs?: 'gap' | 'zero' | 'span';

  /**
   * Whether `#N/A` values are treated as empty cells, so `showBlanksAs` decides how they're drawn.
   * When `false`, a point with `#N/A` is skipped, and a line connects across it.
   *
   * @default false
   */
  showNaAsBlank?: boolean;

  /**
   * Whether a data label is shown for a point whose value is beyond the value axis's fixed
   * maximum.
   *
   * @default false
   */
  showDataLabelsOverMax?: boolean;

  /**
   * Whether data in hidden rows and columns is plotted. When `false`, only visible cells are
   * plotted.
   *
   * @default false
   */
  plotHiddenCells?: boolean;

  /**
   * Whether the chart area has rounded corners.
   *
   * @default false
   */
  roundedCorners?: boolean;

  /**
   * Native Office chart style number. A renderer doesn't need this to interpret the chart. It's
   * kept so an exporter can write it back. When absent, the chart has no style number.
   */
  styleId?: integer;

  /**
   * Fill and outline of the chart area. By default, the chart area has a `bg1` fill and a 0.75pt
   * `tx1` 15%/85% outline, and a shape that sets only one of them keeps the other's default.
   */
  shape?: Shape;

  /**
   * Chart-wide text style. Every element's text inherits the properties it doesn't set itself
   * from here, before falling back to its own defaults. See {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;

  /**
   * How this chart maps theme color names to theme color slots.
   *
   * When absent, the default map applies: `bg1` to `lt1`, `tx1` to `dk1`, `bg2` to `lt2`, `tx2` to
   * `dk2`, and every other name to the slot with the same name.
   */
  colorMap?: ChartColorMap;

  /**
   * Parts of the workbook theme that this chart replaces with its own.
   */
  themeOverride?: ChartThemeOverride;

  /**
   * The plot area: its fill and outline, and its manual position and size. When absent, the plot
   * area has no fill or outline, and its position and size are automatic.
   */
  plotArea?: ChartPlotArea;

  /**
   * Shapes, text boxes, and pictures drawn on top of the chart, in drawing order: later entries
   * are drawn above earlier ones.
   */
  userShapes?: ChartDrawing[];

  /**
   * 3D view settings. A chart is 3D when this is present, and 2D when it's absent. An importer
   * should set this for every 3D chart, using an empty object when the source has no view settings.
   */
  view3D?: ChartView3D;

  /**
   * The floor of a 3D chart or a contour chart. A contour chart is seen from straight above, so its
   * floor is the background and frame of the area the data is drawn in. These aren't part of
   * `view3D`, because contour charts have none.
   */
  floor?: ChartWall;

  /**
   * The side wall of a 3D chart or a contour chart. A contour chart's side wall is seen edge on.
   */
  sideWall?: ChartWall;

  /**
   * The back wall of a 3D chart or a contour chart. A contour chart's back wall is seen edge on, so
   * only its line shows, along the top edge of the data.
   */
  backWall?: ChartWall;

  /**
   * The pivot table that this chart plots. A chart with `pivot` is a pivot chart.
   *
   * The chart's series are the ones the pivot table had when the file was saved, each with its
   * ranges in the pivot table. When the pivot table changes, an application with a pivot engine
   * rebuilds the chart's series and applies the pivot formats to them.
   */
  pivot?: ChartPivot;
};
