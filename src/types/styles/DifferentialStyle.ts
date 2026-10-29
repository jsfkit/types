import type { Style } from './Style.ts';

/**
 * A differential style. Similar to {@link Style} except each entry lists _only_ the properties it
 * _changes_. If a property is absent then it leaves a cell's existing style value untouched. Note
 * that the documented `@default` values inherited from {@link Style} do not apply here.
 */
export type DifferentialStyle = Omit<Style, 'extendsStyle' | 'pivotButton'>;
