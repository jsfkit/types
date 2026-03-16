import type { DefinedName } from '../DefinedName.ts';
import type { External } from '../External.ts';
import type { Style } from '../styles/index.ts';
import type { Table } from '../tables/index.ts';
import type { PivotTable } from '../pivotTables/index.ts';
import type { Person } from '../comments/index.ts';
import type { Worksheet } from '../worksheets/index.ts';
import type { CalcProps } from './CalcProps.ts';
import type { WorkbookView } from './WorkbookView.ts';

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
  /**
   * A simple dictionary of binary images used by this workbook.
   *
   * The keys should be the file paths of the images used to refer to them, commonly these will be
   * the `mediaId` properties on drawing objects. The values should be data URI encoded binaries.
   *
   * The following is a table of formats you may be expected to encounter:
   *
   *  | Extension               | MIME type              | Common name
   *  |-------------------------|------------------------|-------------
   *  | `.png`                  | `image/png`            | Portable Network Graphics
   *  | `.jpg`, `.jpeg`         | `image/jpeg`           | JPEG
   *  | `.gif`                  | `image/gif`            | Graphics Interchange Format
   *  | `.emf`                  | `image/emf`            | Enhanced Metafile
   *  | `.wmf`                  | `image/wmf`            | Windows Metafile
   *  | `.wdp`, `.jxr`, `.hdp`  | `image/vnd.ms-photo`   | Windows Media Photo / JPEG XR
   *  | `.bmp`                  | `image/bmp`            | Bitmap
   *  | `.tif`, `.tiff`         | `image/tiff`           | Tagged Image File Format
   *  | `.svg`                  | `image/svg+xml`        | Scalable Vector Graphics
   *
   * @see {@link https://en.wikipedia.org/wiki/Data_URI_scheme}
   * @see {@link https://www.rfc-editor.org/rfc/rfc2397}
   */
  images?: Record<string, string>;
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
  // The first example above might be determined by the XLSX file having `docProps/app.xml` with
  // `<Application>Microsoft Macintosh Excel</Application>` and `<AppVersion>16.0300</AppVersion>`.
  // The second example might be detected by the XLSX file lacking `docProps/app.xml` and perhaps
  // containing tell-tale signs like `IFERROR(__xludf.DUMMYFUNCTION("FLATTEN(...)"))` formulas and
  // `IFERROR(__xludf.DUMMYFUNCTION("""COMPUTED_VALUE"""),2.0)` spilled-value markers.
  meta?: {
    /**
     * Information about the application that originated this workbook. Converters should
     * populate this from file metadata and/or by heuristic detection (in which case they should
     * set `confidence` to a value less than `1`).
     */
    app?: {
      /**
       * The plain application name, without platform qualifiers or version suffixes
       * (e.g. `"Microsoft Excel"`, `"LibreOffice Calc"`).
       */
      // For XLSX files this can be derived from the `<Application>` element in
      // `docProps/app.xml`, with platform words like `"Macintosh"` stripped out.
      name?: string;
      /**
       * The application version string, if known (e.g. `"16.0300"`).
       */
      // For XLSX files this can be found in `<AppVersion>` in `docProps/app.xml`.
      version?: string;
      /**
       * Operating system or other variant of the application (e.g. `"Macintosh"`). Present when
       * the application name in the source file includes a platform qualifier that was separated
       * out from {@link name}.
       */
      variant?: string;
      /**
       * How confident the converter is in the identification. A value of `1` means the app
       * information came directly from the metadata in the source file. Values less than `1`
       * indicate heuristic detection, with lower values representing less certainty.
       *
       * @defaultValue 1
       */
      confidence?: number;
    };
  };
};
