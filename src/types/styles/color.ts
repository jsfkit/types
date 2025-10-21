/**
 * A hex-encoded RGB or RGBA value that conforms to the CSS4 color specification (e.g. `"#3cb371"`).
 *
 * @see {@link https://www.w3.org/TR/css-color-4/#hex-notation|CSS spec}
 * @pattern ^#([a-fA-F0-9]{3,4}|([a-fA-F0-9][a-fA-F0-9]){3,4})$
 */
export type Color = `#${string}`;
