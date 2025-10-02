import type { ReactNode } from "react";

export interface Fruit {
    name: string;
    color: string;
    score: number;
}

export interface ColumnConfig {
    label: string;
    render: (data: Fruit) => ReactNode | string | number;
    sortValue?: (data: Fruit) => string | number;
    header?: () => ReactNode;
}

export interface SortableTableProps {
    data: Fruit[];
    config: ColumnConfig[];
    keyFn: (fruit: Fruit) => string;
}