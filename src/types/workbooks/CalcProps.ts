import type { integer } from '../integer.ts';

/**
 * Directions on how formulas should be recalculated in the workbook.
 *
 * @group Workbooks
 */
export type CalcProps = {
  /**
   * Specifies whether an attempt should be made to calculate formulas that contain circular
   * references. Defaults to `false` in Excel.
   */
  iterate?: boolean;
  /**
   * The maximum number of calculation iterations, when {@link CalcProps.iterate} is `true`.
   * Defaults to `100` in Excel.
   */
  iterateCount?: integer;
  /**
   * When a calculation iteration results in an absolute change that is less than iterateDelta,
   * then no further iterations should be attempted. Defaults to `0.001` in Excel.
   */
  iterateDelta?: number;
  /**
   * Which of the two date systems the workbook uses. 1900 is the default.
   *
   * @see {@link https://support.microsoft.com/office/e7fe7167-48a9-4b96-bb53-5612a800b487 | Date systems in Excel}
   */
  epoch?: 1900 | 1904;
  /**
   * The calculation mode for the workbook.
   *
   * - `"auto"` (default when absent): recalculate all formulas automatically.
   * - `"autoNoTable"`: recalculate automatically but exclude data tables.
   * - `"manual"`: formulas are only recalculated when explicitly triggered.
   *
   * @defaultValue "auto"
   */
  calcMode?: 'auto' | 'autoNoTable' | 'manual';
  /**
   * Whether the consuming application should perform a full recalculation when the workbook is
   * opened. Mirrors the OOXML `<calcPr fullCalcOnLoad="1"/>` attribute (ECMA-376 §18.2.2).
   *
   * Per the spec, a writer should set this when cached values may not reflect what the formulas
   * would now produce, and clear it after a successful recalculation on load. Per the spec, a
   * reader should suppress the full recalculation when {@link CalcProps.calcMode} is `"manual"` —
   * manual mode takes precedence.
   *
   * @defaultValue false
   */
  fullCalcOnLoad?: boolean;
};
