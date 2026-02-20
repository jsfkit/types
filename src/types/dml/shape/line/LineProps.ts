import type { PositiveCoordinate } from '../../PositiveCoordinate.ts';
import type { GradientLinearFill } from '../fill/GradientLinearFill.ts';
import type { GradientPathFill } from '../fill/GradientPathFill.ts';
import type { NoFill } from '../fill/NoFill.ts';
import type { PatternFill } from '../fill/PatternFill.ts';
import type { SolidFill } from '../fill/SolidFill.ts';
import type { DashStop } from './DashStop.ts';
import type { LineAlignment } from './LineAlignment.ts';
import type { LineCapType } from './LineCapType.ts';
import type { LineCompoundType } from './LineCompoundType.ts';
import type { LineEnd } from './LineEnd.ts';
import type { LineJoinType } from './LineJoinType.ts';
import type { LineStyle } from './LineStyle.ts';

/**
 * Line styling properties.
 *
 * Defines the visual appearance of lines and shape outlines, including
 * stroke style, width, caps, joins, and decorative line ends (arrows).
 */
export type LineProps = {
  /** Compound line type for creating multi-stroke effects. */
  cmpd?: LineCompoundType;

  /**
   * Line cap style determining how line endpoints are rendered.
   * @defaultValue "flat"
   */
  cap?: LineCapType;

  /**
   * Line join style determining how line segment connections are rendered.
   * @defaultValue "miter"
   */
  join?: LineJoinType;

  /**
   * Line alignment relative to the shape path (centered on path or inset)
   * @defaultValue "ctr"
   */
  align?: LineAlignment;

  /**
   * Fill style applied to the line stroke.
   */
  fill?: PatternFill | SolidFill | GradientLinearFill | GradientPathFill | NoFill;

  /**
   * Line width in EMUs.
   * @min 0
   * @max 20116800
   */
  width?: PositiveCoordinate;

  /**
   * Line dash/dot pattern style.
   */
  style?: LineStyle | DashStop[];

  /** Arrow or decoration at the start of the line. */
  head?: LineEnd;

  /** Arrow or decoration type at the end of the line. */
  tail?: LineEnd;
};
