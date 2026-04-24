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
   * 2021 extlinks2021 namespace).
   *
   * `absoluteUrl`/`relativeUrl` are captured from child elements of
   * `<xxl21:alternateUrls>`; `driveId`/`itemId` are attributes on the
   * `<xxl21:alternateUrls>` element itself.
   *
   * At least one subfield must be set for the value to be meaningful; a purely
   * empty `alternateUrls: {}` is allowed by the type but producers and consumers
   * should omit it in that case. Each subfield is independently optional per the
   * xxl21 schema.
   */
  alternateUrls?: {
    /** Absolute URL to the external resource (e.g. a OneDrive web URL). */
    absoluteUrl?: string;
    /** Relative URL to the external resource. */
    relativeUrl?: string;
    /**
     * OneDrive/SharePoint drive identifier Excel writes alongside cloud
     * alternate URLs. Used by Microsoft Graph API calls to locate the
     * container holding the external document, independent of the URL.
     * Opaque string; round-tripped verbatim.
     */
    driveId?: string;
    /**
     * OneDrive/SharePoint item identifier — the resource-level counterpart
     * to `driveId`; used by Microsoft Graph API calls to locate the external
     * document itself. Opaque string; round-tripped verbatim.
     */
    itemId?: string;
  };
};
