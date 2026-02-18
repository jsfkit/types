/**
 * Specifies the manner in which a path should be filled.
 *
 * | Value         | Effect on path fill
 * |---------------|--------------------------------
 * | `darken`      | darker shaded color applied to it’s fill.
 * | `darkenLess`  | slightly darker shaded color applied to it’s fill.
 * | `lighten`     | lightly shaded color applied to it’s fill.
 * | `lightenLess` | slightly lighter shaded color applied to it’s fill.
 * | `none`        | should have no fill.
 * | `norm`        | should have a normally shaded color applied to it’s fill.
 */
export type PathFillMode =
 'none' |
 'norm' |
 'lighten' |
 'lightenLess' |
 'darken' |
 'darkenLess';
