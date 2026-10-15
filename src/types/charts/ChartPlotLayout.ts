import type { ChartLayoutArc } from './ChartLayoutArc.ts';
import type { ChartLayoutArea } from './ChartLayoutArea.ts';
import type { ChartLayoutBar } from './ChartLayoutBar.ts';
import type { ChartLayoutBoxplot } from './ChartLayoutBoxplot.ts';
import type { ChartLayoutBubble } from './ChartLayoutBubble.ts';
import type { ChartLayoutCandlestick } from './ChartLayoutCandlestick.ts';
import type { ChartLayoutFunnel } from './ChartLayoutFunnel.ts';
import type { ChartLayoutLine } from './ChartLayoutLine.ts';
import type { ChartLayoutRadar } from './ChartLayoutRadar.ts';
import type { ChartLayoutScatter } from './ChartLayoutScatter.ts';
import type { ChartLayoutSurface } from './ChartLayoutSurface.ts';
import type { ChartLayoutTreemap } from './ChartLayoutTreemap.ts';
import type { ChartLayoutWaterfall } from './ChartLayoutWaterfall.ts';

/**
 * Visual settings for a plot. The `type` names the kind of plot the settings are for, and must
 * match the plot: {@link ChartLayoutBar} for `bar` plots, and so on.
 *
 * @group Charts
 */
export type ChartPlotLayout =
  ChartLayoutArc |
  ChartLayoutArea |
  ChartLayoutBar |
  ChartLayoutBoxplot |
  ChartLayoutBubble |
  ChartLayoutCandlestick |
  ChartLayoutFunnel |
  ChartLayoutLine |
  ChartLayoutRadar |
  ChartLayoutScatter |
  ChartLayoutSurface |
  ChartLayoutTreemap |
  ChartLayoutWaterfall;
