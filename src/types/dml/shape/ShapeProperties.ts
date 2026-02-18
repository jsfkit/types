import type { Path } from './path/index.ts';
import type { ShapeRect } from './ShapeRect.ts';
import type { Xfrm } from '../Xfrm.ts';
import type { ConnectionPoint } from './ConnectionPoint.ts';
import type { GuidePoint } from './GuidePoint.ts';
import type { AdjustValueHandleXY } from './AdjustValueHandleXY.ts';
import type { AdjustValueHandlePolar } from './AdjustValueHandlePolar.ts';
import type { ShapeStyle } from './ShapeStyle.ts';
import type { FillPattern, FillSolid, FillGradientLinear, FillGradientPath, FillBlip, FillGroup, FillNone } from './fill/index.ts';
import type { LineProps } from './line/index.ts';
import type { BlackWhiteMode } from './BlackWhiteMode.ts';

/**
 * Shape visual and geometric properties.
 *
 * Defines the complete visual styling and custom geometry for a shape,
 * including fill, line, transformation, custom paths, and interactive handles.
 */
export type ShapeProperties = {
  /** 2D transformation (position, rotation, scale). */
  xfrm?: Xfrm,

  /** Black-and-white rendering mode for grayscale or duotone display. */
  bwMode?: BlackWhiteMode,

  /** Preset shape type identifier (e.g., "rect", "ellipse", "roundRect"). */
  shape?: string,

  /** Visual style references (fill, line, effect styles from theme). */
  style?: ShapeStyle,

  /** Custom geometry paths defining the shape outline. */
  paths?: Path[],

  /** Text margin rectangle (inset from shape bounds for text positioning). */
  rect?: ShapeRect,

  // XXX: define a named union type?
  /** Adjustment handles, allowing interactive shape geometry modification. */
  ah?: (AdjustValueHandleXY | AdjustValueHandlePolar)[],

  /** Adjustment values (guide points that store user-adjustable parameters). */
  av?: GuidePoint[],

  /** Shape guides (calculated points used in geometry formulas). */
  gd?: GuidePoint[],

  /** Connection points for attaching connectors to the shape. */
  cxn?: ConnectionPoint[],

  /** Line/outline styling properties. */
  line?: LineProps,

  // XXX: define a named union type?
  /** Fill styling (solid, gradient, pattern, image, or none). */
  fill?: (
    FillPattern |
    FillSolid |
    FillGradientLinear |
    FillGradientPath |
    FillGroup |
    FillNone |
    FillBlip
  ),
};
