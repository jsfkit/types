import type { integer } from '../integer.ts';
import type { ChartFieldRole } from './ChartFieldRole.ts';
import type { ChartValue } from './ChartValue.ts';

// XXX: cell should be a link here
/**
 * Where a field's values come from: a formula, literal values, or both.
 *
 * | Present              | Meaning
 * |----------------------|-------------------------------------------------------------------
 * | `formula`            | Evaluate the formula to get the values.
 * | `formula` + `values` | Evaluate the formula. `values` is an optional cache of its result.
 * | `values`             | Literal data. The values are the data.
 *
 * This works like a {@link Cell}'s `f` and `v`.
 *
 * @group Charts
 */
export type ChartFieldBinding = {
  /**
   * A reference to the source cells, for example `Sheet1!$B$2:$B$10`.
   */
  formula?: string;

  // Literal data is OOXML `c:numLit` or `c:strLit`.
  /**
   * The field's values, by point index. With a `formula`, they're only a cache of its result,
   * which can be missing or out of date, and a writer may leave them out. Without a `formula`,
   * they're literal data.
   */
  values?: ChartValue[];

  /**
   * The field's role in the source chart. When absent, the field has no particular role.
   */
  role?: ChartFieldRole;

  /**
   * For multi-level categories, which level of the source range this field holds. Level 0 is
   * the innermost level, the one closest to the axis. All the level fields of a multi-level
   * category share the same `formula`: one range, with a column per level when `direction` is
   * `column`, or a row per level when it's `row`. Level 0 is the range's last column (or row),
   * next to the values, and outer levels come before it. When absent, the field isn't a level of a
   * multi-level category.
   */
  level?: integer;

  // This is ChartEx `cx:f` `dir`. Legacy charts don't record it, so an importer infers it from the
  // range's shape.
  /**
   * How the values run through the range: down columns, or across rows. For a multi-level
   * category range, this also decides whether each level is a column or a row.
   *
   * @default "column"
   */
  direction?: 'column' | 'row';

  // This is OOXML `c15:fullRef`.
  /**
   * The whole source range, when categories are filtered out with Excel's chart filter. `formula`
   * then refers to the visible cells only, which can be a list of ranges, so evaluating it gives
   * only the visible points. When absent, no categories are filtered out.
   */
  fullFormula?: string;

  /**
   * Excel number format code for the field's values. When `sourceLinked` is `true`, this is the
   * source cells' format, and a renderer that evaluates the formula takes the format from the
   * cells.
   *
   * @default "General"
   */
  numberFormat?: string;

  /**
   * Whether the number format follows the source cells.
   *
   * @default true
   */
  sourceLinked?: boolean;
};
