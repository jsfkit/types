import type { CalcProps } from './calc_props';
import type { DefinedName } from './defined_name';
import type { External } from './external';
import type { Style } from './styles/style';
import type { Table } from './tables/table';
import type { Worksheet } from './worksheet';

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
};
