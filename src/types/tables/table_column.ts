import type { TableColumnType } from './table_column_type';

/**
 * Describes a column within a table.
 */
export type TableColumn = {
  /**
   * The column name. It must be unique among column names in the same table when compared in a
   * case-insensitive manner. Must be non-empty. May contain white-space characters but not
   * exclusively.
   */
  name: string;
  /**
   * Describes the type of values found in the cells of the column, when a column contains only one
   * data type.
   *
   * @default "unknown"
   */
  dataType?: TableColumnType;
  /**
   * If the column is a calculated column, then this field must include the formula used.
   */
  formula?: string;
};
