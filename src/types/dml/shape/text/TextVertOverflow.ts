/**
 * Text vertical overflow behavior.
 *
 * Defines how text is handled when it exceeds the vertical bounds of its container:
 *
 * | Value      | Behavior                                      |
 * |------------|-----------------------------------------------|
 * | `overflow` | Text extends beyond container bounds          |
 * | `ellipsis` | Text is truncated with ellipsis indicator     |
 * | `clip`     | Text is clipped at container edge             |
 *
 * @group Drawings
 */
export type TextVertOverflow = 'overflow' | 'ellipsis' | 'clip';
