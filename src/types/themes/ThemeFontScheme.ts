import type { ThemeFontCollection } from './ThemeFontCollection.ts';

/**
 * Theme font pair (major and minor font).
 *
 * @group Themes
 */
export type ThemeFontScheme = {
  /** Name of the font scheme. */
  name: string;
  /** Major theme font. */
  major: ThemeFontCollection;
  /** Minor theme font. */
  minor: ThemeFontCollection;
};
