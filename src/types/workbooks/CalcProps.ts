import type { integer } from '../integer.ts';

/**
 * Directions on how formulas should be recalculated in the workbook.
 */
export type CalcProps = {
  /**
   * Specifies whether an attempt should be made to calculate formulas that contain circular
   * references. Defaults to `false` in Excel.
   */
  iterate: boolean;
  /**
   * The maximum number of calculation iterations, when {@link CalcProps.iterate} is `true`.
   * Defaults to `100` in Excel.
   */
  iterateCount: integer;
  /**
   * When a calculation iteration results in an absolute change that is less than iterateDelta,
   * then no further iterations should be attempted. Defaults to `0.001` in Excel.
   */
  iterateDelta: number;
  /**
   * Which of the two date systems the workbook uses. 1900 is the default.
   *
   * @see {@link https://support.microsoft.com/office/e7fe7167-48a9-4b96-bb53-5612a800b487 | Date systems in Excel}
   */
  epoch?: 1900 | 1904;
};
