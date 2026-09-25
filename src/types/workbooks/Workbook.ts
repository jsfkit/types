import type { Person } from '../comments/index.ts';
import type { DefinedName } from '../DefinedName.ts';
import type { External } from '../External.ts';
import type { NamedStyle } from '../styles/index.ts';
import type { Style } from '../styles/index.ts';
import type { Table } from '../tables/index.ts';
import type { Theme } from '../themes/index.ts';
import type { PivotTable } from '../pivotTables/index.ts';
import type { Worksheet } from '../worksheets/index.ts';
import type { CalcProps } from './CalcProps.ts';
import type { WorkbookView } from './WorkbookView.ts';
import type { WorkbookMeta } from './WorkbookMeta.ts';
import type { Asset } from './Asset.ts';

/**
 * A workbook is a collection of worksheets, styles, defined names, and other metadata. It's what's
 * commonly known as a spreadsheet.
 *
 * @group Workbooks
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
  /** Metadata on the workbook's pivot tables. */
  pivotTables?: PivotTable[];
  /** Directions on how formulas should be recalculated in the workbook. */
  calculationProperties?: CalcProps;
  /** Styles for cells in the workbook. */
  styles?: Style[];
  /** Named cell style definitions (e.g. "Normal", "Heading 1"), keyed by style name. */
  namedStyles?: Record<string, NamedStyle>;
  /** External cells referenced by the workbook. An external cell is a cell in another workbook. */
  externals?: External[];
  /**
   * Deduplicated formulas used in the workbook. Stored in R1C1 notation. Two formulas are
   * considered to be the same when their respective representations in R1C1 notation, are
   * identical.
   */
  formulas?: string[];
  /** The different display configurations saved for the workbook. */
  views?: WorkbookView[];
  /**
   * Individuals who have written a threaded comment in this workbook, or who have been mentioned in
   * one.
   *
   * @see {@link ThreadedComment}
   */
  people?: Person[];
  /**
   * A list of assets attached to this workbook. Typically these will be images, or VBA projects.
   * By may also be XML parts of the original workbook needed to be preserved.
   */
  assets?: Asset[];
  /**
   * The workbook theme. Specifies the colour scheme and fonts referenced throughout the workbook in
   * order to create a consistent visual presentation.
   */
  theme?: Theme;
  /**
   * Optional metadata about this workbook.
   *
   * @example
   * An XLSX file with metadata explicitly marking it as saved by Excel for Macintosh might have
   * `meta: { app: { name: 'Microsoft Excel', version: '16.0300', variant: 'Macintosh' } }`.
   *
   * @example
   * An XLSX file lacking app metadata but recognized heuristically as being a Google Sheets
   * export might have `meta: { app: { name: 'Google Sheets', confidence: 0.8 } }`.
   */
  meta?: WorkbookMeta;
};
