import type { integer } from '../integer.ts';
import type { ChartAxis } from './ChartAxis.ts';
import type { ChartColorMap } from './ChartColorMap.ts';
import type { ChartDataSet } from './ChartDataSet.ts';
import type { ChartDataTable } from './ChartDataTable.ts';
import type { ChartDrawing } from './ChartDrawing.ts';
import type { ChartLegend } from './ChartLegend.ts';
import type { ChartMainTitle } from './ChartMainTitle.ts';
import type { ChartPivotFormat } from './ChartPivotFormat.ts';
import type { ChartPivotOptions } from './ChartPivotOptions.ts';
import type { ChartPivotSource } from './ChartPivotSource.ts';
import type { ChartPlot } from './ChartPlot.ts';
import type { ChartPlotArea } from './ChartPlotArea.ts';
import type { ChartScale } from './ChartScale.ts';
import type { ChartShape } from './ChartShape.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';
import type { ChartThemeOverride } from './ChartThemeOverride.ts';
import type { ChartTransform } from './ChartTransform.ts';
import type { ChartView3D } from './ChartView3D.ts';
import type { ChartWall } from './ChartWall.ts';

/**
 * A chart: a semantic description of what a chart shows and how, that sits between spreadsheet
 * chart formats (OOXML charts and ChartEx), renderers, and Vega. The model keeps no source-format
 * data, such as native IDs or unknown XML: adapters, not the model, understand file formats.
 *
 * A chart is its configuration: what to plot and how. Its data is secondary. Each field of each
 * series is defined by a binding, usually a formula. A renderer evaluates the bindings against the
 * workbook to get the data. Values stored next to a formula are only an optional cache, like a
 * cell's `v` next to its `f`: the cache can be missing or out of date, and a writer is free to
 * leave it out. Only data without a formula (literal data) is authoritative.
 *
 * Conventions:
 *
 * - Discriminated unions use a `type` property.
 * - Percentages are 0-100 ({@link Percentage}). Where Excel defines its own range for a setting
 *   (gap width, overlap, hole size), that range is kept so conversion is lossless.
 * - Every formula and reference is an A1-style string, normalized the same way as cell formulas.
 *   An external reference names its workbook by file name (`[other.xlsx]Sheet1!A1`), matching
 *   {@link Workbook.externals}, rather than by OOXML's link index (`[1]Sheet1!A1`).
 * - Dates are serial numbers, in the workbook's date system ({@link CalcProps.epoch}). A date
 *   number format on the field binding or axis marks them as dates, the same way cell values work.
 * - Angles are in 60,000ths of a degree ({@link DmlAngle}), as in JSF drawings.
 *
 * Overrides, such as a point's `shape` over its series' `shape`, or a series' `labels` over its
 * plot's, set only what they change: each property an override leaves out comes from the object
 * it overrides. JSF values (`Fill`, `Line`, `Color`) and lists replace the inherited value whole.
 *
 * Charts are stored in {@link Workbook.charts}, keyed by ID. A drawing anchors a chart on a sheet
 * through {@link GraphicChart.chartId}, which is the key of the chart.
 *
 * All cross-references inside a chart (data, scales, axes) use IDs that are local to the chart.
 * Native OOXML IDs, such as axis IDs, are never used as chart IDs. Each ID is unique within its
 * chart, among objects of the same kind:
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
   * The chart title. When absent, the chart has no title.
   *
   * When present without `text` or `formula`, the title text is automatic, and a renderer
   * generates it: when the chart shows exactly one series and that series has a `name`, the series
   * name; otherwise "Chart Title". Hidden series don't count, a pie always shows one series, and a
   * generated name such as "Series1" isn't a name. Importers and exporters keep the title empty,
   * and never fill in the text themselves.
   */
  title?: ChartMainTitle;

  /** Datasets that plots read from. */
  data: ChartDataSet[];

  /**
   * Derived datasets. Each transform reads from a dataset or another transform through its
   * `source` property, so transforms form a directed acyclic graph.
   */
  transforms?: ChartTransform[];

  scales: ChartScale[];

  axes?: ChartAxis[];

  /** The legend. When absent, the chart has no legend. */
  legend?: ChartLegend;

  /**
   * The chart's plots, in the order they were read from the source. An exporter writes them in
   * this order. The order also ranks chart types in the default legend (see
   * {@link ChartLegend.scale}).
   */
  plots: ChartPlot[];

  /** A data table shown below the plot area. When absent, the chart has no data table. */
  dataTable?: ChartDataTable;

  /**
   * How to render empty cells in the source data. This is Excel's "Show empty cells as" option,
   * OOXML `c:dispBlanksAs`.
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
   * When `false`, a point with `#N/A` is skipped, and a line connects across it. This is Excel's
   * "Show #N/A as an empty cell" option, OOXML `c16r3:dispNaAsBlank`. Recent versions of Excel
   * turn it on for new charts, but files without it use the older behavior.
   *
   * @default false
   */
  showNaAsBlank?: boolean;

  /**
   * Whether a data label is shown for a point whose value is beyond the value axis's fixed
   * maximum. This is OOXML `c:showDLblsOverMax`.
   *
   * @default false
   */
  showDataLabelsOverMax?: boolean;

  /**
   * Whether data in hidden rows and columns is plotted. When `false`, only visible cells are
   * plotted. This is Excel's "Show data in hidden rows and columns" option, the inverse of OOXML
   * `c:plotVisOnly`.
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

  /** Fill and outline of the chart area. When absent, they're automatic. */
  shape?: ChartShape;

  /**
   * Chart-wide text style. Every element's text inherits the properties it doesn't set itself
   * from here, before falling back to its own defaults. A chart title takes 1.2 times this font
   * size. See {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;

  /**
   * How this chart maps theme color names to theme color slots. When absent, the default map
   * applies: `bg1` to `lt1`, `tx1` to `dk1`, `bg2` to `lt2`, `tx2` to `dk2`, and every other
   * name to the slot with the same name.
   */
  colorMap?: ChartColorMap;

  /**
   * Parts of the workbook theme that this chart replaces with its own. Excel keeps these when a
   * chart is copied from a workbook with a different theme, so the chart keeps its look.
   */
  themeOverride?: ChartThemeOverride;

  plotArea?: ChartPlotArea;

  /**
   * Shapes, text boxes, and pictures drawn on top of the chart, in drawing order: later entries
   * are drawn above earlier ones.
   */
  userShapes?: ChartDrawing[];

  /**
   * 3D view settings. A chart is 3D when this is present, and 2D when it's absent. An importer
   * sets this for every 3D chart, using an empty object when the source has no view settings.
   */
  view3D?: ChartView3D;

  /** The floor of a 3D chart. */
  floor?: ChartWall;

  /** The side wall of a 3D chart. */
  sideWall?: ChartWall;

  /** The back wall of a 3D chart. */
  backWall?: ChartWall;

  /**
   * The pivot table that this chart plots. A chart with a pivot source is a pivot chart.
   *
   * The chart's series are the ones the pivot table had when the file was saved, each with its
   * ranges in the pivot table. When the pivot table changes, an application with a pivot engine
   * rebuilds the chart's series and applies `pivotFormats` to them.
   */
  pivotSource?: ChartPivotSource;

  /**
   * Formatting for pivot chart series and points, keyed by pivot items rather than by series
   * index, so it survives a pivot refresh. Applies only when `pivotSource` is present.
   */
  pivotFormats?: ChartPivotFormat[];

  /** Which field buttons a pivot chart shows. Applies only when `pivotSource` is present. */
  pivotOptions?: ChartPivotOptions;

  /**
   * Namespaced escape hatch for experimental or non-core semantics.
   *
   * Example key: `grid:foo`.
   */
  extensions?: Record<string, unknown>;
};
