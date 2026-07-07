import type { integer } from '../integer.ts';

/**
 * Database connection properties (`<dbPr>`), present on a {@link Connection} whose data comes from
 * a database or a file queried like one (OLE DB / ODBC / Jet).
 *
 * @group Workbooks
 */
export type ConnectionDbProperties = {
  /** The OLE DB / ODBC connection string. */
  connection?: string;
  /** The command text run against the source — a query, a table name, a cube name, etc. */
  command?: string;
  /**
   * How to interpret {@link command}, as an OOXML numeric code: 1 = cube name, 2 = SQL query,
   * 3 = table name, 4 = default, 5 = list/web query.
   */
  commandType?: integer;
  /** A secondary command used when the connection is refreshed on the server. */
  serverCommand?: string;
};

/**
 * A workbook data connection — one `<connection>` in `xl/connections.xml`. This is the external
 * data source behind a pivot cache whose {@link PivotCacheExternal.sourceType} is `'external'`:
 * that cache's {@link PivotCacheExternal.connectionId} refers to a connection's {@link id}.
 *
 * Only the attributes needed to round-trip database/file connections are modelled; other source
 * kinds (OLAP, web, text) and less common attributes are not yet represented.
 *
 * @group Workbooks
 */
export type Connection = {
  /** The connection's identifier, referenced by {@link PivotCacheExternal.connectionId}. */
  id: integer;
  /** The connection's name. */
  name?: string;
  /** The connection kind as an OOXML numeric code (e.g. 1 = ODBC, 4 = web, 5 = OLE DB, 6 = text). */
  type?: integer;
  /** The file this connection was created from, if any. */
  sourceFile?: string;
  /** Whether the connection is kept open between refreshes. */
  keepAlive?: boolean;
  /** Whether the connection refreshes in the background. */
  background?: boolean;
  /** The Excel version that last refreshed the connection. */
  refreshedVersion?: integer;
  /** A stable unique identifier (the `xr16:uid` extension attribute). */
  uid?: string;
  /** Database connection properties, present for database/file connections. */
  dbPr?: ConnectionDbProperties;
};
