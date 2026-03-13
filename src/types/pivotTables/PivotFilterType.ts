/**
 * The type of a pivot table filter.
 *
 * @group PivotTables
 */
export type PivotFilterType =
  // Aggregate types
  'unknown' | 'count' | 'percent' | 'sum' |
  // Caption comparisons
  'captionEqual' | 'captionNotEqual' |
  'captionBeginsWith' | 'captionNotBeginsWith' |
  'captionEndsWith' | 'captionNotEndsWith' |
  'captionContains' | 'captionNotContains' |
  'captionGreaterThan' | 'captionGreaterThanOrEqual' |
  'captionLessThan' | 'captionLessThanOrEqual' |
  'captionBetween' | 'captionNotBetween' |
  // Value comparisons
  'valueEqual' | 'valueNotEqual' |
  'valueGreaterThan' | 'valueGreaterThanOrEqual' |
  'valueLessThan' | 'valueLessThanOrEqual' |
  'valueBetween' | 'valueNotBetween' |
  // Date comparisons
  'dateEqual' | 'dateNotEqual' |
  'dateOlderThan' | 'dateOlderThanOrEqual' |
  'dateNewerThan' | 'dateNewerThanOrEqual' |
  'dateBetween' | 'dateNotBetween' |
  // Relative date periods
  'tomorrow' | 'today' | 'yesterday' |
  'nextWeek' | 'thisWeek' | 'lastWeek' |
  'nextMonth' | 'thisMonth' | 'lastMonth' |
  'nextQuarter' | 'thisQuarter' | 'lastQuarter' |
  'nextYear' | 'thisYear' | 'lastYear' |
  'yearToDate' |
  // Quarter filters
  'Q1' | 'Q2' | 'Q3' | 'Q4' |
  // Month filters
  'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6' |
  'M7' | 'M8' | 'M9' | 'M10' | 'M11' | 'M12';
