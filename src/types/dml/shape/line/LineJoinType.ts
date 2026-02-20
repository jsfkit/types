// Note that the inconsistency with the cap property ("rnd" vs. "round") comes from the DML spec.

/**
 * Defines the shape to be used at the corners of a stroked path.
 * These are equivalent to their CSS/SVG linejoin value counterparts.
 */
export type LineJoinType = 'bevel' | 'round' | 'miter';
