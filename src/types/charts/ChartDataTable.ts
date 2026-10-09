import type { ChartShape } from './ChartShape.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * A data table shown below the plot area, listing each series' values.
 *
 * @group Charts
 */
export type ChartDataTable = {
  /** @default true */
  showHorzBorder?: boolean;
  /** @default true */
  showVertBorder?: boolean;
  /** @default true */
  showOutline?: boolean;
  /**
   * Whether legend keys are shown next to the series names.
   *
   * @default false
   */
  showKeys?: boolean;

  shape?: ChartShape;

  textStyle?: ChartTextStyle;
};
