/** No underline. */
export type UNDERLINE_NONE = "none";
/** Single underline. */
export type UNDERLINE_SINGLE = "single";
/** Single accounting underline. */
export type UNDERLINE_SINGLE_ACCOUNTING = "singleAccounting";
/** Double underline. */
export type UNDERLINE_DOUBLE = "double";
/** Double accounting underline. */
export type UNDERLINE_DOUBLE_ACCOUNTING = "doubleAccounting";

/**
 * Which type of underline to use when rendering text.
 */
export type Underline =
  | UNDERLINE_NONE
  | UNDERLINE_SINGLE
  | UNDERLINE_SINGLE_ACCOUNTING
  | UNDERLINE_DOUBLE
  | UNDERLINE_DOUBLE_ACCOUNTING;
