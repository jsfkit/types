import type { LineEndSize } from './LineEndSize.ts';
import type { LineEndType } from './LineEndType.ts';

/**
 * Defines a line ending decoration.
 */
export type LineEnd = {
  /** The type of decoration to render. */
  type: LineEndType,

  // XXX: Excel calls this "w"
  /**
   * Width size of the ending decoration.
   */
  width?: LineEndSize,

  /**
   * Length size of the ending decoration.
   */
  len?: LineEndSize,
};
