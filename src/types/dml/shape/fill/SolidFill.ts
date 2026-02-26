import type { Color } from '../../../styles/Color.ts';

/**
 * Solid color fill.
 *
 * Defines a fill using a single uniform color with no gradients, patterns, or images.
 *
 * @group Drawings
 */
export type SolidFill = {
  /** Type discriminator for solid fills. */
  type: 'solid';

  /** Background color for the solid fill. */
  bg?: Color;
};
