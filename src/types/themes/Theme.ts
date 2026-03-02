import type { ThemeCustomColor } from './ThemeCustomColor.ts';
import type { ThemeElements } from './ThemeElements.ts';

/**
 * Workbook theme.
 */
export type Theme = {
  /**
   * Theme name.
   *
   * @default ""
   */
  name?: string;
  /** Required theme element bundle. */
  elements: ThemeElements;
  /**
   * Custom colour palettes.
   */
  customColors?: ThemeCustomColor[];
};
