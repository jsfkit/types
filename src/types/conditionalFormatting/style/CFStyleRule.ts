import type { CFAverageRule } from './CFAverageRule.ts';
import type { CFBlankRule } from './CFBlankRule.ts';
import type { CFCompareRule } from './CFCompareRule.ts';
import type { CFDateRule } from './CFDateRule.ts';
import type { CFDuplicateRule } from './CFDuplicateRule.ts';
import type { CFErrorRule } from './CFErrorRule.ts';
import type { CFFormulaRule } from './CFFormulaRule.ts';
import type { CFRankRule } from './CFRankRule.ts';
import type { CFTextRule } from './CFTextRule.ts';

/**
 * Rules that apply a differential style to each cell that meets a condition ("style rules").
 *
 * The differential styles are shared and stored on the workbook itself.
 *
 * @group ConditionalFormatting
 */
export type CFStyleRule =
  CFFormulaRule |
  CFCompareRule |
  CFTextRule |
  CFDateRule |
  CFBlankRule |
  CFErrorRule |
  CFDuplicateRule |
  CFRankRule |
  CFAverageRule;
