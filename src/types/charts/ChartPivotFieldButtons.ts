/**
 * Field buttons on a pivot chart. Each button lets a user filter or sort by a pivot field
 * directly on the chart.
 *
 * @group Charts
 */
export type ChartPivotFieldButtons = {
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
  filter?: boolean;

  /**
   * Whether to show buttons for the fields on the category axis.
   *
   * @default false
   */
  category?: boolean;

  /**
   * Whether to show buttons for the value fields.
   *
   * @default false
   */
  value?: boolean;

  /**
   * Whether to show buttons for the fields that make up the series (the legend).
   *
   * @default false
   */
  series?: boolean;

  /**
   * Whether to show the buttons that expand and collapse category levels.
   *
   * @default false
   */
  expandCollapse?: boolean;
};
