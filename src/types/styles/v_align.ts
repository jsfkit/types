/** Vertically aligned at the bottom. */
export type V_ALIGN_BOTTOM = "bottom";
/** Vertically aligned at the top. */
export type V_ALIGN_TOP = "top";
/** Vertically aligned in the center. */
export type V_ALIGN_CENTER = "center";
/** Justified vertically alignment. */
export type V_ALIGN_JUSTIFY = "justify";
/** Distribute vertical alignment. */
export type V_ALIGN_DISTRIBUTED = "distributed";

/** Vertical alignment of a cell content. */
export type VAlign =
  | V_ALIGN_BOTTOM
  | V_ALIGN_TOP
  | V_ALIGN_CENTER
  | V_ALIGN_JUSTIFY
  | V_ALIGN_DISTRIBUTED;
