import type { CFColorScaleRule } from './color/CFColorScaleRule.ts';
import type { CFDataBarRule } from './dataBar/CFDataBarRule.ts';
import type { CFIconSetRule } from './icon/CFIconSetRule.ts';
import type { CFStyleRule } from './style/CFStyleRule.ts';

/**
 * A conditional formatting rule. Each rule applies to the cells and ranges in its `ref`, and `type`
 * sets which kind of rule it is. There are two kinds:
 *
 * - Style rules ({@link CFStyleRule}) apply a differential style from
 *   {@link Workbook.diffStyles} to each cell that meets a condition:
 *   - {@link CFExpressionRule}: a formula returns `true`
 *   - {@link CFCellIsRule}: the value compares to one or two formulas
 *   - {@link CFTextRule}: the text contains, begins with, or ends with a string
 *   - {@link CFTimePeriodRule}: the date falls in a window relative to today
 *   - {@link CFBlanksRule}: the cell is, or isn't, empty
 *   - {@link CFErrorsRule}: the value is, or isn't, an error
 *   - {@link CFValuesRule}: the value is duplicated, or unique, in the range
 *   - {@link CFRankRule}: the value is among the highest or lowest in the range
 *   - {@link CFAverageRule}: the value is above or below the range's mean
 *
 * - Visual rules draw in each cell according to where its value falls in the range:
 *   - {@link CFColorScaleRule}: a background colour
 *   - {@link CFDataBarRule}: a bar
 *   - {@link CFIconSetRule}: an icon
 *
 * When more than one rule applies to a cell, all of them apply in `priority` order. If two style
 * rules set the same property, the rule with the lower `priority` value wins. A style rule with
 * `stopIfTrue` prevents rules with a higher `priority` value from applying to the cells it matches.
 *
 * @group ConditionalFormatting
 */
export type CFRule = CFStyleRule | CFColorScaleRule | CFDataBarRule | CFIconSetRule;
