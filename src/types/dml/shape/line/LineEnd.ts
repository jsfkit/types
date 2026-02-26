import type { LineEndSize } from './LineEndSize.ts';
import type { LineEndType } from './LineEndType.ts';

/**
 * Defines a line ending decoration.
 *
 * @group Drawings
 */
export type LineEnd = {
  /**
   * The type of decoration to render.
   * @defaultValue "none"
   */
  type: LineEndType,

  /**
   * Width size of the ending decoration.
   * @defaultValue "med"
   */
  width?: LineEndSize,

  /**
   * Length size of the ending decoration.
   * @defaultValue "med"
   */
  len?: LineEndSize,
};
