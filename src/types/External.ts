import type { ExternalDefinedName } from './ExternalDefinedName.ts';
import type { ExternalWorksheet } from './ExternalWorksheet.ts';

/**
 * A cell from another workbook (i.e. another file) that is referenced in this workbook.
 *
 * @group Workbooks
 */
export type External = {
  /** Filename being referenced. */
  name: string;
  /**
   * Relevant worksheets from an external workbook.
   *
   * These will only be a subset of sheets needed to run calculations, so indexes from the original
   * workbooks will not be preserved.
   */
  sheets: ExternalWorksheet[];
  /** Relevant defined names from an external workbook. */
  names: ExternalDefinedName[];
  /**
   * Indicates that the path to the external workbook file is unknown or missing.
   * In XLSX, this corresponds to the xlPathMissing relationship type.
   */
  pathMissing?: boolean;
  /**
   * Alternate URLs for the external workbook — typically used when the source file
   * lives in a cloud location (OneDrive, SharePoint). In XLSX, this corresponds to
   * the `<xxl21:alternateUrls>` extension element inside `<externalBook>` (from the
   * 2021 extlinks2021 namespace), with each URL captured from the external-link part's
   * rels entry that the extension's child element references.
   *
   * Both child kinds are optional per the OOXML schema; at most one of each may
   * appear. When omitted, the roundtrip is a single-rel file-path external.
   */
  alternateUrls?: {
    /** Absolute URL to the external resource (e.g. a OneDrive web URL). */
    absoluteUrl?: string;
    /** Relative URL to the external resource. */
    relativeUrl?: string;
    /**
     * OneDrive/SharePoint drive identifier. Excel writes this alongside a
     * cloud alternate URL so the client can reach the same document via the
     * Graph API. Opaque string; we preserve it verbatim through the round-trip.
     */
    driveId?: string;
    /**
     * OneDrive/SharePoint item identifier. Same role as `driveId` —
     * preserved verbatim for the round-trip.
     */
    itemId?: string;
  };
};
