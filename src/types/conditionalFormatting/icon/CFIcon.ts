import type { integer } from '../../integer.ts';
import type { CFIconSetName } from './CFIconSetName.ts';

/**
 * A single icon picked from a built-in set, used when an icon set rule mixes icons from
 * different sets.
 *
 * @group ConditionalFormatting
 */
export type CFIcon = {
  iconSet: CFIconSetName;
  /** Zero-based position of the icon within `iconSet`. */
  index: integer;
};
