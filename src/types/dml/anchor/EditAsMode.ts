/**
 * Defines the movement behavior of the anchor when editing.
 *
 * - `absolute`: Do not move or resize with underlying rows/columns.
 * - `oneCell`: Move with cells but do not resize.
 * - `twoCell`: Move and resize with anchor cells.
 */
export type EditAsMode =
  'absolute' |
  'oneCell' |
  'twoCell';
