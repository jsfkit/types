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
   * Optional metadata about the application that originated this workbook.
   * Converters should populate this from file metadata such as XLSX `docProps/app.xml`,
   * or by heuristic detection (in which case they should set `appGuessed: true`).
   *
   * Additional converter-specific or consumer-specific properties may be present. These
   * should ideally be namespaced with a `foo:` prefix ending in a colon, where `foo`
   * represents an application that creates the JSF workbook and defines its own metadata
   * properties. Beyond this, no specific schema for such metadata is defined.
   *
   * @example
   * An XLSX file with `<Application>Microsoft Macintosh Excel</Application>` and
   * `<AppVersion>16.0300</AppVersion>` would yield
   * `meta: { app: 'Microsoft Excel', appVersion: '16.0300', appVariant: 'Macintosh' }`.
   *
   * @example
   * An XLSX file lacking `docProps/app.xml` but identified heuristically as a Google Sheets
   * export would yield `meta: { app: 'Google Sheets', appGuessed: true }`.
   */
  meta?: Record<string, unknown> & {
    /**
     * The plain application name, without platform qualifiers or version suffixes
     * (e.g. `"Microsoft Excel"`, `"LibreOffice Calc"`). For XLSX files this is derived from
     * the `<Application>` element in `docProps/app.xml`, with platform words like `"Macintosh"`
     * stripped out.
     */
    app?: string;
    /**
     * The application version string, if known (e.g. `"16.0300"`). For XLSX files this comes
     * from `<AppVersion>` in `docProps/app.xml`.
     */
    appVersion?: string;
    /**
     * Operating system or other variant of the application (e.g. `"Macintosh"`). Present when
     * the application name in the source file includes a platform qualifier that was separated
     * out from {@link app}.
     */
    appVariant?: string;
    /**
     * When `true`, indicates that {@link app}, {@link appVersion}, and {@link appVariant} were
     * not explicitly stated in the file but inferred heuristically. Absent or `false` means the
     * app information came directly from the file.
     *
     * @defaultValue false
     */
    appGuessed?: boolean;
  };
};
