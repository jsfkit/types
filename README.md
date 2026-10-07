JSF Types
=========

The JSON Spreadsheet Format (JSF) is a file format for representing spreadsheets in JSON. This
package contains the TypeScript types that describe the JSF format in full: workbooks, worksheets,
cells, drawings, and everything in between.

```sh
npm install @jsfkit/types
```

All types are exported from the package root:

```ts
import type { Workbook, Worksheet, Cell } from '@jsfkit/types';
```

The main parts of JSF
---------------------

JSF types are divided into several broad areas, notably workbooks, drawings, and pivot tables.
Workbooks chiefly covers the data in a spreadsheet: the cells, values, formulas, their formatting.
Drawings covers objects that are drawn on top of the data: the shapes and images that sit on top of
the cell grid. Pivot tables cover grouping and aggregation of sheet data. All these types are
detailed in the [JSF documentation](https://jsfkit.github.io/types/).

Key workbook types:

- [`Workbook`](https://jsfkit.github.io/types/Workbook/)
- [`Worksheet`](https://jsfkit.github.io/types/Worksheet/)
- [`Cell`](https://jsfkit.github.io/types/Cell/)

Key drawing types:

- [`Graphic`](https://jsfkit.github.io/types/Graphic/)
- [`Shape`](https://jsfkit.github.io/types/Shape/)

Key pivot table types:

- [`PivotTable`](https://jsfkit.github.io/types/PivotTable/)
- [`PivotCache`](https://jsfkit.github.io/types/PivotCache/)
- [`PivotField`](https://jsfkit.github.io/types/PivotField/)
- [`PivotDataField`](https://jsfkit.github.io/types/PivotDataField/)

---

Development of @jsfkit/types is sponsored by [GRID](https://grid.is/), the spreadsheet engine for AI agents.
