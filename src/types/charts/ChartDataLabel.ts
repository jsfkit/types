import type { ChartDataLabels } from './ChartDataLabels.ts';
import type { ChartManualLayout } from './ChartManualLayout.ts';
import type { ChartText } from './ChartText.ts';

/**
 * A data label for one point. It can replace the generated text with custom text.
 *
 * @group Charts
 */
export type ChartDataLabel = ChartDataLabels & {
  /**
   * Whether the label for this point is deleted.
   *
   * @default false
   */
  hidden?: boolean;

  /**
   * Custom label text. Replaces the generated text.
   */
  text?: ChartText;

  /**
   * Manual position of the label. When absent, the position is automatic.
   */
  layout?: ChartManualLayout;
};
