/**
 * Page margins for a worksheet, in inches. Used when printing or rendering print previews.
 *
 * @group Workbooks
 */
export type PageMargins = {
  /** Left page margin, in inches. */
  left: number;
  /** Right page margin, in inches. */
  right: number;
  /** Top page margin, in inches. */
  top: number;
  /** Bottom page margin, in inches. */
  bottom: number;
  /** Header margin, in inches (distance from the top of the page to the header). */
  header: number;
  /** Footer margin, in inches (distance from the bottom of the page to the footer). */
  footer: number;
};
