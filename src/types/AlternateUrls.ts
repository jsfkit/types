/**
 * Alternate URLs for an external workbook — typically used when the source file
 * lives in a cloud location (OneDrive, SharePoint). In XLSX, this corresponds to
 * the `<xxl21:alternateUrls>` extension element inside `<externalBook>` (from
 * the 2021 extlinks2021 namespace).
 *
 * `absoluteUrl`/`relativeUrl` are captured from child elements of
 * `<xxl21:alternateUrls>`; `driveId`/`itemId` are attributes on the
 * `<xxl21:alternateUrls>` element itself.
 *
 * At least one subfield must be set for the value to be meaningful; a purely
 * empty `{}` is allowed by the type but producers and consumers should omit
 * it in that case. Each subfield is independently optional per the xxl21
 * schema.
 *
 * @group Workbooks
 */
export type AlternateUrls = {
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
