/**
 * Specifies how an object should be rendered when specified to be in black and white mode
 *
 * | Value                          | Color rendering
 * |--------------------------------|--------------------------------
 * | `auto` (Automatic)             | Rendered with automatic coloring
 * | `black` (Black)                | Rendered with black-only coloring
 * | `blackGray` (Black and Gray)   | Rendered with black and gray coloring
 * | `blackWhite` (Black and White) | Rendered within black and white coloring
 * | `clr` (Color)                  | Rendered with normal coloring
 * | `gray` (Gray)                  | Rendered with gray coloring
 * | `grayWhite` (Gray and White)   | Rendered within gray and white coloring
 * | `hidden` (Hidden)              | Rendered with hidden coloring
 * | `invGray` (Inverse Gray)       | Rendered with inverse gray coloring
 * | `ltGray` (Light Gray)          | Rendered with light gray coloring
 * | `white` (White)                | Rendered within white coloring
 */
export type BlackWhiteMode =
  'clr' |
  'auto' |
  'gray' |
  'ltGray' |
  'invGray' |
  'grayWhite' |
  'blackGray' |
  'blackWhite' |
  'black' |
  'white' |
  'hidden';
