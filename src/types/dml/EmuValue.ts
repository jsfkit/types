/**
 * Represents a one dimensional value (usually position or length) in EMUs.
 *
 * EMUs (English Metric Units) are a high precision coordinate space originating from Microsoft
 * Windows / Office graphics and printing. The unit bridges bridges English (inches) and metric (cm)
 * units for layout.
 *
 * EMU is defined as: 91440 EMUs per 1 inch and 360000 EMUs per 1 cm. Thus EMUs can:
 *
 * - Stay integer-based (avoids floating-point rounding errors).
 * - Convert cleanly to both inches and metric units.
 * - Work well for screen/display and printer coordinate systems.
 *
 * EMUs can be converted to pixels or points by calculating EMUs * DPI / 914400.
 * For example: At 96 DPI, 49600 EMUs correspond to 49600 * 96 / 914400 = 5.2 points.
 *
 * Excel files seem to be saved at 72 DPI, which means 12700 per pixel:
 *
 * - EMU to PX: `emu => emu / 12700;`
 * - PX to PX: `emu => Math.round(emu * 12700);`
 *
 * @min -27273042329600
 * @max 27273042316900
 */
export type EmuValue = number;
