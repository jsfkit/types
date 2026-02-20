import type { Graphic } from './Graphic.ts';
import type { XfrmGroup } from './XfrmGroup.ts';

/**
 * Group shape container.
 *
 * Represents a collection of graphic objects grouped together as a single unit,
 * allowing them to be transformed, moved, and manipulated collectively.
 */
export type GraphicGroup = {
  /** Type discriminator for group shapes. */
  type: 'group',

  /** Unique identifier for this group. */
  id: string,

  /** Display name of the group. */
  name: string,

  /** Array of graphic objects contained within this group. */
  content: Graphic[],

  /** 2D transformation applied to the group (position, rotation, scale). */
  xfrm?: XfrmGroup,
};
