/**
 * Represents a single transformation that can be applied to a colour.
 *
 * Most transforms have a `type` that specifies the kind of transformation, and a `value` that
 * provides the necessary parameter for that transformation. The exact meaning and valid range of
 * `value` depends on the `type` of transform. The exception are a handful of whole-colour
 * transformations that affect the entire colour; they have `type` but no `value.`
 *
 * The supported transform types include:
 *
 * - Tint and shade: blend the colour towards white (tint) or black (shade) by a specified
 *   percentage.
 * - Alpha: adjust the opacity of the colour using various methods (absolute value, multiplicative,
 *   or additive).
 * - Hue, saturation, and luminance: rotate a colour attribute of the colour by a specified amount
 *   (absolute, multiplicative, or additive).
 * - Per-channel RGB adjustments: modify individual red, green, or blue channels (absolute,
 *   multiplicative, or additive).
 * - Whole-colour operations: apply transformations that affect the entire colour (complement,
 *   invert, grayscale, gamma adjustments).
 */
export type ColorTransform =
  {
    /**
     * Produces a lighter version of the input colour. A 10% tint is 10% of the input colour
     * combined with 90% white. */
    type: 'tint';
    /**
     * Percentage (clamped to 0-100).
     * @min 0
     * @max 100
     */
    value: number;
  } |
  {
    /**
     * Produces a darker version of the input colour. A 10% shade is 10% of the input colour
     * combined with 90% black.
     */
    type: 'shade';
    /**
     * Percentage (clamped to 0-100).
     * @min 0
     * @max 100
     */
    value: number
  } |
  {
    /** Alters the input colour to have the specified opacity, but with its colour unchanged. */
    type: 'alpha';
    /**
     * Percentage (clamped to 0-100).
     * @min 0
     * @max 100
     */
    value: number;
  } |
  {
    /**
     * Produces a more or less opaque version of the input colour. An alpha modulate never increases
     * the alpha beyond 100%. A 200% alpha modulate makes an input colour twice as opaque as before.
     * A 50% alpha modulate makes an input colour half as opaque as before.
     */
    type: 'alphaMod';
    /**
     * Positive percentage.
     * @min 0
     */
    value: number;
  } |
  {
    /**
     * Produces a more or less opaque version of the input colour.
     *
     * Increases or decreases the input alpha percentage by the specified percentage offset. A 10%
     * alpha offset increases a 50% opacity to 60%. A -10% alpha offset decreases a 50% opacity to
     * 40%. The transformed alpha values are limited to a range of 0 to 100%. A 10% alpha offset
     * increase to a 100% opaque object still results in 100% opacity.
     */
    type: 'alphaOffset';
    /**
     * Percentage (clamped to -100 to 100).
     * @min -100
     * @max 100
     */
    value: number;
  } |
  {
    /**
    * Alters the input colour so it has the specified hue, but with its saturation and luminance
    * unchanged.
    */
    type: 'hue';
    /**
     * Degrees (clamped to 0-360).
     * @min 0
     * @max 360
     */
    value: number;
  } |
  {
    /**
     * Modulates the input colour's hue by the given percentage. A 50% hue modulate decreases the
     * angular hue value by half. A 200% hue modulate doubles the angular hue value.
     */
    type: 'hueMod';
    /**
     * Positive percentage.
     * @min 0
     */
    value: number;
  } |
  {
    /**
     * Produces the input colour with its hue shifted, but with its saturation and luminance
     * unchanged.
     */
    type: 'hueOffset';
    /** Degrees. */
    value: number;
  } |

  {
    /**
     * Alters the input colour so it has the specified saturation, but with its hue and luminance
     * unchanged.
     */
    type: 'saturation';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Modulates the input colour's saturation by the given percentage.
     *
     * A 50% saturation modulate reduces the saturation by half. A 200% saturation modulate doubles
     * the saturation.
     */
    type: 'saturationMod';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Produces the input colour with its saturation shifted, but with its hue and luminance
     * unchanged. A 10% offset to 20% saturation yields 30% saturation.
     */
    type: 'saturationOffset';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Alters the input colour so it has the specified luminance, but with its hue and saturation
     * unchanged.
     */
    type: 'luminance';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Alters the input colour's luminance modulated by the given percentage.
     *
     * A 50% luminance modulate reduces the luminance by half. A 200% luminance modulate doubles the
     * luminance.
     */
    type: 'luminanceMod';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Produces the input colour with its luminance shifted, but with its hue and saturation
     * unchanged.
     */
    type: 'luminanceOffset';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Produces the input colour with the specified red component. The green and blue colour
     * components unchanged.
     */
    type: 'red';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Alters the input colour so its red component is modulated by the given percentage. A 50% red
     * modulate reduces the red component by half. A 200% red modulate doubles the red component.
     */
    type: 'redMod';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Alters the input colour so its red component is shifted. Its green and blue colour components
     * unchanged.
     */
    type: 'redOffset';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Provides the input colour with the specified green component. Its red and blue colour
     * components unchanged.
     */
    type: 'green';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Modulates the input colour's green component by the given percentage.
     *
     * A 50% green modulate reduces the green component by half. A 200% green modulate doubles the
     * green component.
     */
    type: 'greenMod';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Alters the input colour so its green component is shifted. Its red and blue colour components
     * unchanged.
     */
    type: 'greenOffset';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Provides the input colour with the specified blue component. Its red and green colour
     * components unchanged.
     */
    type: 'blue';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Modulates the input colour's blue component by the given percentage.
     *
     * A 50% blue modulate reduces the blue component by half. A 200% blue modulate doubles the blue
     * component.
     */
    type: 'blueMod';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Alters the input colour so its blue component is shifted, but with its red and green colour
     * components unchanged.
     */
    type: 'blueOffset';
    /** Unbounded percentage. */
    value: number;
  } |
  {
    /**
     * Specifies that the colour rendered should be the complement of the input colour with the
     * complement being defined as such.
     */
    type: 'complement'
  } |
  {
    /**
     * Specifies the inverse of the input colour. For example, the inverse of red (1, 0, 0) is cyan
     * (0, 1, 1 ).
     */
    type: 'invert'
  } |
  {
    /**
     * Specifies a grey scale of the input colour, taking into relative intensities of the red,
     * green, and blue primaries.
     */
    type: 'grayscale'
  } |
  {
    /**
     * Specifies that the output colour rendered by the generating application should be the sRGB
     * gamma shift of the input colour.
     */
    type: 'gamma'
  } |
  {
    /**
     * Specifies that the output colour rendered by the generating application should be the inverse
     * sRGB gamma shift of the input colour.
     */
    type: 'inverseGamma'
  };
