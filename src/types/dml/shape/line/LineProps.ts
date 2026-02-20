import type { FillGradientLinear } from '../fill/FillGradientLinear.ts';
import type { FillGradientPath } from '../fill/FillGradientPath.ts';
import type { FillNone } from '../fill/FillNone.ts';
import type { FillPattern } from '../fill/FillPattern.ts';
import type { FillSolid } from '../fill/FillSolid.ts';
import type { DashStop } from './DashStop.ts';
import type { LineEnd } from './LineEnd.ts';
import type { LineStyle } from './LineStyle.ts';

// FIXME: move values to own types once they have been fully decided.
// TODO: custom dashes: custDash

/**
 * Line styling properties.
 *
 * Defines the visual appearance of lines and shape outlines, including
 * stroke style, width, caps, joins, and decorative line ends (arrows).
 */
export type LineProps = {
  /** Compound line type for creating multi-stroke effects. */
  compound?: 'dbl' | 'sng' | 'thickThin' | 'thinThick' | 'tri';

  // XXX: this prop has been normalized, which creates inconsistencies (see FillBlip.ts)
  // XXX: DML: cap := flat, rnd, sq
  /** Line cap style determining how line endpoints are rendered. */
  cap?: 'butt' | 'round' | 'square';

  // XXX: Note the inconsistency with cap in spec: "rnd" vs. "round"
  /** Line join style determining how line segment connections are rendered. */
  join?: 'bevel' | 'round' | 'miter';

  // XXX: this prop has been normalized, which creates inconsistencies (see FillBlip.ts)
  // XXX: DML: algn := ctr, in
  /** Line alignment relative to the shape path (centered on path or inset). */
  align?: 'center' | 'inner';

  /** Fill style applied to the line stroke. */
  fill?: FillPattern | FillSolid | FillGradientLinear | FillGradientPath | FillNone;

  /**
   * Line width in EMUs.
   *
   * @min 0
   * @max 20116800
   */
  width?: number;

  /** Line dash/dot pattern style. */
  style?: LineStyle;

  /** Custom line dashes (only when style is unset). */
  dashes?: DashStop[];

  /** Arrow or decoration at the start of the line. */
  head?: LineEnd;

  /** Arrow or decoration type at the end of the line. */
  tail?: LineEnd;
};
