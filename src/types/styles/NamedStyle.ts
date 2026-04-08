import type { integer } from '../integer.ts';
import type { Style } from './Style.ts';

/**
 * A named cell style definition (e.g. "Normal", "Heading 1").
 *
 * In OOXML these correspond to `<cellStyle>` elements and their associated
 * formatting records in `<cellStyleXfs>`.
 *
 * @group Workbooks
 */
export type NamedStyle = Style & {
  /** The display name of the cell style (e.g. "Normal", "Heading 1"). */
  name: string;
  /**
   * The OOXML built-in style identifier, if this is a built-in style.
   * For example, 0 = Normal, 16 = Heading 1, etc.
   */
  builtinId?: integer;
};
