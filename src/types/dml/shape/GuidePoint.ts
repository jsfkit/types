/**
 * Guide point for custom shape geometry.
 *
 * Defines a named calculation point that can be referenced in shape paths
 * and used to create parameterized, adjustable geometry.
 *
 * @group Drawings
 */
export type GuidePoint = {
  /**
   * Name identifier for this guide point, used to reference it in formulas and paths.
   */
  name: string;

  /**
   * Formula expression defining the guide point's value (e.g., "val 50000" for a constant value).
   */
  fmla: string;
};
