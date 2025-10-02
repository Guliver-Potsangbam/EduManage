export interface Option {
    label: string;
    value: string;
}

export interface DropdownProps {
    options: Option[];
    value: Option | null;
    onChange: (option: Option) => void;
}