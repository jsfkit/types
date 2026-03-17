/**
 * Metadata describing the type composition and value range of a cache field's data. These are
 * redundant when {@link PivotCacheField.sharedItems} contains items (the metadata can be derived),
 * but for fields whose data is stored only in records (no shared items), they preserve min/max
 * and type information that would otherwise be lost.
 *
 * @group PivotTables
 */
export type PivotCacheSharedItemsMeta = {
  /**
   * Whether the field contains blank (missing) values.
   *
   * @default false
   */
  containsBlank?: boolean;
  /**
   * Whether the field contains more than one data type (excluding blank and string).
   *
   * @default false
   */
  containsMixedTypes?: boolean;
  /**
   * Whether the field contains a mix of text and other types, or only text.
   *
   * @default true
   */
  containsSemiMixedTypes?: boolean;
  /**
   * Whether the field contains string values.
   *
   * @default true
   */
  containsString?: boolean;
  /**
   * Whether the field contains numeric values.
   *
   * @default false
   */
  containsNumber?: boolean;
  /**
   * Whether the field contains only integer numeric values (no fractions).
   *
   * @default false
   */
  containsInteger?: boolean;
  /**
   * Whether the field contains date values.
   *
   * @default false
   */
  containsDate?: boolean;
  /**
   * Whether the field contains non-date values.
   *
   * @default true
   */
  containsNonDate?: boolean;
  /** The minimum numeric value in the field. */
  minValue?: number;
  /** The maximum numeric value in the field. */
  maxValue?: number;
  /** The minimum date value in the field (ISO 8601 datetime string). */
  minDate?: string;
  /** The maximum date value in the field (ISO 8601 datetime string). */
  maxDate?: string;
};
