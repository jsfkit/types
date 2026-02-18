import type { DefinedName } from '../DefinedName.ts';
import type { External } from '../External.ts';
import type { Style } from '../styles/index.ts';
import type { Table } from '../tables/index.ts';
import type { Person } from '../comments/index.ts';
import type { Worksheet } from '../worksheets/index.ts';
import type { CalcProps } from './CalcProps.ts';
import type { WorkbookView } from './WorkbookView.ts';

/**
 * A workbook is a collection of worksheets, styles, defined names, and other metadata. It's what's
 * commonly known as a spreadsheet.
 */
export type Workbook = {
  /** Name of the workbook. In the case of a .xlsx file it will be the filename. */
  name: string;
  /** An ordered array of the worksheets in the workbook. */
  sheets: Worksheet[];
  /** An array of the workbook's defined names. */
  names?: DefinedName[];
  /** Metadata on the workbook's tables. */
  tables?: Table[];
  /** Directions on how formulas should be recalculated in the workbook. */
  calculationProperties?: CalcProps;
  /** Styles for cells in the workbook. */
  styles?: Style[];
  /** External cells referenced by the workbook. An external cell is a cell in another workbook. */
  externals?: External[];
  /**
   * Deduplicated formulas used in the workbook. Stored in R1C1 notation. Two formulas are
   * considered to be the same when their respective representations in R1C1 notation, are
   * identical.
   */
  formulas?: string[];
  /** The different display configurations saved for the workbook. */
  views?: WorkbookView[]
  /**
   * Individuals who have written a threaded comment in this workbook, or who have been mentioned in
   * one.
   *
   * @see {@link ThreadedComment}
   */
  people?: Person[];
};
