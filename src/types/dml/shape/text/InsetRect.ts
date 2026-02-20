import type { EmuValue } from '../../EmuValue.ts';

/**
 * Defines an inset or internal margins for a text box within a shape.
 */
export type InsetRect = {
  /**
   * Top edge inset from shape bounds in EMUs.
   * @defaultValue 45720
   */
  t?: EmuValue;

  /**
   * Left edge inset from shape bounds in EMUs.
   * @defaultValue 91440
   */
  l?: EmuValue;

  /**
   * Bottom edge inset from shape bounds in EMUs.
   * @defaultValue 45720
   */
  b?: EmuValue;

  /**
   * Right edge inset from shape bounds in EMUs.
   * @defaultValue 91440
   */
  r?: EmuValue;
};
