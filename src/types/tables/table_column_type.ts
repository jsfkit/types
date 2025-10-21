/** Describes a column that contains boolean values (true/false). */
export type TABLE_COLUMN_BOOLEAN = "boolean";
/** Describes a column that contains date and time values. */
export type TABLE_COLUMN_DATETIME = "datetime";
/** Describes a column that contains numeric values. */
export type TABLE_COLUMN_NUMBER = "number";
/** Describes a column that contains text values. */
export type TABLE_COLUMN_TEXT = "text";
/** Describes a column with an unknown or mixed data type. */
export type TABLE_COLUMN_UNKNOWN = "unknown";

/** Describes the type of values found in the cells of a table column. */
export type TableColumnType =
  | TABLE_COLUMN_TEXT
  | TABLE_COLUMN_NUMBER
  | TABLE_COLUMN_BOOLEAN
  | TABLE_COLUMN_DATETIME
  | TABLE_COLUMN_UNKNOWN;
