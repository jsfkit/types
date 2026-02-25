/**
 * OS-defined system colour (e.g. window text, highlight).
 *
 * The value must be one of the pre-defined values. The colour matching each of these values should
 * match the closest analogous colour in the OS in use.
 *
 * TODO: DrawingML requires a `lastClr` attribute, an `#RRGGBB` colour cached at last save. should
 * JSF store this as the computed value on the {@link Color}?.
 */
export type SystemColor = {
  type: 'system';
  /** System colour name. */
  value:
    'scrollBar' |
    'background' |
    'activeCaption' |
    'inactiveCaption' |
    'menu' |
    'window' |
    'windowFrame' |
    'menuText' |
    'windowText' |
    'captionText' |
    'activeBorder' |
    'inactiveBorder' |
    'appWorkspace' |
    'highlight' |
    'highlightText' |
    'btnFace' |
    'btnShadow' |
    'grayText' |
    'btnText' |
    'inactiveCaptionText' |
    'btnHighlight' |
    '3dDkShadow' |
    '3dLight' |
    'infoText' |
    'infoBk' |
    'hotLight' |
    'gradientActiveCaption' |
    'gradientInactiveCaption' |
    'menuHighlight' |
    'menuBar';
};
