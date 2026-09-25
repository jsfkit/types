/**
 * Information about the application that originated a workbook. Converters should
 * populate this from file metadata and/or by heuristic detection (in which case they should
 * set `confidence` to a value less than `1`).
 */
export type AppMeta = {
  /**
   * The plain application name, without platform qualifiers or version suffixes
   * (e.g. `"Microsoft Excel"`, `"LibreOffice Calc"`).
   */
  name?: string;
  /**
   * The application version string, if known (e.g. `"16.0300"`).
   */
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
