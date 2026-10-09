/**
 * Field buttons on a pivot chart. Each button lets a user filter or sort by a pivot field
 * directly on the chart. A pivot chart without these options shows no buttons.
 *
 * @group Charts
 */
export type ChartPivotOptions = {
  /**
   * Whether all field buttons are hidden. Overrides the individual settings below.
   *
   * @default false
   */
  hideAll?: boolean;

  /**
   * Whether to show buttons for the report filter fields.
   *
   * @default false
   */
  showFilterButtons?: boolean;

  /**
   * Whether to show buttons for the fields on the category axis.
   *
   * @default false
   */
  showCategoryButtons?: boolean;

  /**
   * Whether to show buttons for the value fields.
   *
   * @default false
   */
  showValueButtons?: boolean;

  /**
   * Whether to show buttons for the fields that make up the series (the legend).
   *
   * @default false
   */
  showSeriesButtons?: boolean;

  /**
   * Whether to show the buttons that expand and collapse category levels.
   *
   * @default false
   */
  showExpandCollapseButtons?: boolean;
};
