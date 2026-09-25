import type { integer } from '../integer.ts';

/**
 * A defined workbook metadata property.
 *
 * While typed as string, the following are expected to be
 * ISO date formatted:
 *
 * - `created`
 * - `modified`
 * - `lastPrinted`
 */
export type MetaProperty =
  { id: 'appVersion'; value: string } |
  { id: 'application'; value: string } |
  { id: 'category'; value: string } |
  { id: 'company'; value: string } |
  { id: 'contentStatus'; value: string } |
  { id: 'created'; value: string } |
  { id: 'creator'; value: string } |
  { id: 'description'; value: string } |
  { id: 'docSecurity'; value: integer } |
  { id: 'hyperlinkBase'; value: string } |
  { id: 'hyperlinksChanged'; value: boolean } |
  { id: 'identifier'; value: string } |
  { id: 'keywords'; value: string } |
  { id: 'language'; value: string } |
  { id: 'lastModifiedBy'; value: string } |
  { id: 'lastPrinted'; value: string } |
  { id: 'linksUpToDate'; value: boolean } |
  { id: 'manager'; value: string } |
  { id: 'modified'; value: string } |
  { id: 'revision'; value: string } |
  { id: 'scaleCrop'; value: boolean } |
  { id: 'sharedDoc'; value: boolean } |
  { id: 'subject'; value: string } |
  { id: 'template'; value: string } |
  { id: 'title'; value: string } |
  { id: 'totalTime'; value: integer } |
  { id: 'version'; value: string };

// Defined by OOXML but omitted:
// - titlesOfParts --- Complex type of worksheet names
// - headingPairs -- Complex type of worksheet metadata
// - hLinks -- ??
// - digSig -- Legacy
// - characters -- Word (int)
// - charactersWithSpaces -- Word (int)
// - hiddenSlides -- PowerPoint (int)
// - lines -- Word (int)
// - mmClips -- Legcay
// - notes -- PowerPoint (int)
// - pages -- Word (int)
// - paragraphs -- Word (int)
// - presentationFormat -- PowerPoint (string)
// - slides -- PowerPoint (int)
// - words -- Word (int)
