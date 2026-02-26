/**
 * Text vertical anchoring/alignment.
 *
 * Defines how text is vertically positioned within its container:
 *
 * | Value  | Position                                |
 * |--------|-----------------------------------------|
 * | `t`    | Top aligned                             |
 * | `ctr`  | Center aligned                          |
 * | `b`    | Bottom aligned                          |
 * | `dist` | Distributed (evenly spaced lines)       |
 * | `just` | Justified (stretched to fill container) |
 *
 * @group Drawings
 */
export type TextAnchoring = 't' | 'b' | 'ctr' | 'dist' | 'just';
