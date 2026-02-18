/**
 * Text horizontal overflow behavior.
 *
 * Defines how text is handled when it exceeds the horizontal bounds of its container:
 *
 * | Value      | Behavior                                      |
 * |------------|-----------------------------------------------|
 * | `overflow` | Text extends beyond container bounds          |
 * | `clip`     | Text is clipped at container edge             |
 */
export type TextHorzOverflow = 'overflow' | 'clip';
