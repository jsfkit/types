import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose value appears more than once in the rule's `ref`. If `negate` is `true`,
 * format every _other_ cell in `ref` (excluding empty cells) instead.
 *
 * A cell is a duplicate if at least two cells in `ref` match its value. Values match as follows:
 *
 * - Strings are compared ignoring case
 * - A string that can be read as a number or date is compared as that number. The number `1`
 *   matches the strings `"1"`, `"1.0"`, and `"1E0"`
 * - A date matches its serial number and a string such as `"2023-03-15"`
 * - Numbers are compared to 15 significant digits
 * - Booleans and errors match only the same boolean or error: `true` doesn't match `"TRUE"` or
 *   `1`, and `#DIV/0!` doesn't match `"#DIV/0!"`
 *
 * A string containing `*` or `?` is a wildcard pattern. A `*` matches any sequence of characters,
 * and a `?` matches any single character. A `~` before either makes it a literal character.
 *
 * As a result, only one of two matching cells may be formatted. For example:
 *
 * - `"a*"` and `"a?c"` both match `"abc"`, so they're duplicates, but `"abc"` isn't, because it
 *   matches only itself
 * - `"*"` matches `"~*"`, so `"*"` is a duplicate. `"~*"` matches only the literal string `"*"`,
 *   not itself, so `"~*"` isn't a duplicate
 *
 * Empty cells are never formatted, but they match an empty string. A cell holding `""` is a
 * duplicate if `ref` also contains an empty cell.
 *
 * @group ConditionalFormatting
 */
export type CFDuplicateRule = CFStyleRuleBase & {
  /** Type discriminator. */
  type: 'duplicate';
  /**
   * Format the cells that aren't duplicates instead. Empty cells are still never formatted.
   *
   * @default false
   */
  negate?: boolean;
};
