import type { ArcToCommand } from './ArcToCommand.ts';
import type { CloseCommand } from './CloseCommand.ts';
import type { CubicBezierToCommand } from './CubicBezierToCommand.ts';
import type { LineToCommand } from './LineToCommand.ts';
import type { MoveToCommand } from './MoveToCommand.ts';
import type { QuadraticBezierToCommand } from './QuadraticBezierToCommand.ts';

/**
 * Path command for shape geometry.
 *
 * Defines a single drawing command in a shape path, using a subset of SVG path commands.
 */
export type PathCommand =
  ArcToCommand |
  CloseCommand |
  CubicBezierToCommand |
  LineToCommand |
  MoveToCommand |
  QuadraticBezierToCommand;
