/**
 * A globally unique identifier.
 *
 * A universally unique identifier (UUID), known in Microsoft-designed systems as a globally unique
 * identifier (GUID). A 128-bit number, represented as 32 hexadecimal digits split with hyphens into
 * five groups. Designed to be a unique identifier for objects in a workbook.
 *
 * @pattern ^\{[0-9]{8}-[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{12}\}$
 */
export type GUID = string;
