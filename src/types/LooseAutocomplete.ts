/**
 * A string union that also accepts any other string, while still offering the literals
 * in `T` as editor autocomplete suggestions.
 *
 * Useful where a property has a set of well-known string values but may also hold
 * arbitrary custom values (e.g. a style name that is usually a built-in name but may be
 * a workbook-defined one).
 *
 * The `& {}` on the `string` arm is what makes this work: without it TypeScript collapses
 * `T | string` to plain `string` and the literal suggestions are lost. See
 * {@link https://github.com/microsoft/TypeScript/issues/29729 | microsoft/TypeScript#29729}.
 *
 * @group Workbooks
 */
export type LooseAutocomplete<T extends string> = T | (string & {});
