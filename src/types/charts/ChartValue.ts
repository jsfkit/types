import type { ChartErrorValue } from './ChartErrorValue.ts';

/**
 * A data value.
 *
 * - Dates are serial numbers, in the workbook's date system ({@link CalcProps.epoch}).
 * - `null` is an empty cell. See {@link Chart.showBlanksAs}.
 *
 * @group Charts
 */
export type ChartValue = string | number | boolean | null | ChartErrorValue;
