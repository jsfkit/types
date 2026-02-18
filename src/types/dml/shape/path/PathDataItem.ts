import type { AdjCoordinate } from '../AdjCoordinate.ts';

/**
 * Path command for shape geometry.
 *
 * Defines a single drawing command in a shape path, using a subset of SVG path commands:
 *
 * | Id  | Command           | Effect
 * |-----|-------------------|--------------------------------
 * | `M` | moveTo            | Move pen to a new position without drawing.
 * | `L` | lineTo            | Draw a line from the current position to a new one.
 * | `A` | arcTo             | Draw an elliptical arc to an endpoint.
 * | `C` | cubicBezierTo     | Draw a cubic Bézier curve to an endpoint.
 * | `Q` | quadraticBezierTo | Draw a quadratic Bézier curve to an endpoint.
 * | `Z` | close             | Close the current subpath by drawing a line to the starting point.
 */
export type PathDataItem = (
  [ 'M', AdjCoordinate, AdjCoordinate ] |
  [ 'L', AdjCoordinate, AdjCoordinate ] |
  [ 'A', AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate ] |
  [ 'C', AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate ] |
  [ 'Q', AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate ] |
  [ 'Z' ]
);
