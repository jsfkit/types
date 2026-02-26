import type { EmuValue } from '../EmuValue.ts';
import type { GeomGuideName } from './GeomGuideName.ts';

/**
 * Defines the type of an adjust coordinate, which can be either an {@link EmuValue} or a
 * {@link GeomGuideName}.
 *
 * @group Drawings
 */
export type AdjustCoordinate = EmuValue | GeomGuideName;
