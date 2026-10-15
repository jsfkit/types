import type { AppMeta } from './AppMeta.ts';
import type { MetaProperty } from './MetaProperty.ts';
import type { MetaPropertyCustom } from './MetaPropertyCustom.ts';

/**
 * Metadata describing a workbook.
 */
export type WorkbookMeta = {
  /**
   * Information about the application that originated this workbook.
   */
  app?: AppMeta;
  /**
   * Properties describing the workbook.
   */
  properties?: (MetaProperty | MetaPropertyCustom)[];
};
