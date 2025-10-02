interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    outline?: boolean;
    rounded?: boolean;
}

type ButtonVariants =
    | { primary: true; secondary?: never; success?: never; warning?: never; danger?: never }
    | { primary?: never; secondary: true; success?: never; warning?: never; danger?: never }
    | { primary?: never; secondary?: never; success: true; warning?: never; danger?: never }
    | { primary?: never; secondary?: never; success?: never; warning: true; danger?: never }
    | { primary?: never; secondary?: never; success?: never; warning?: never; danger: true }
    | { primary?: never; secondary?: never; success?: never; warning?: never; danger?: never };

export type ButtonProps = BaseButtonProps & ButtonVariants;