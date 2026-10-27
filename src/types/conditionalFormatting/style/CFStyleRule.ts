import type { CFAverageRule } from './CFAverageRule.ts';
import type { CFBlanksRule } from './CFBlanksRule.ts';
import type { CFCellIsRule } from './CFCellIsRule.ts';
import type { CFErrorsRule } from './CFErrorsRule.ts';
import type { CFExpressionRule } from './CFExpressionRule.ts';
import type { CFRankRule } from './CFRankRule.ts';
import type { CFTextRule } from './CFTextRule.ts';
import type { CFTimePeriodRule } from './CFTimePeriodRule.ts';
import type { CFValuesRule } from './CFValuesRule.ts';

/**
 * Rules that apply a differential style to each cell that meets a condition ("style rules").
 *
 * The differential styles are shared and stored on the workbook itself.
 *
 * @group ConditionalFormatting
 */
export type CFStyleRule =
  CFExpressionRule |
  CFCellIsRule |
  CFTextRule |
  CFTimePeriodRule |
  CFBlanksRule |
  CFErrorsRule |
  CFValuesRule |
  CFRankRule |
  CFAverageRule;
