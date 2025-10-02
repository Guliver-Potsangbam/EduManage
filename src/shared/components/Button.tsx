
import className from "classnames";
import { twMerge } from 'tailwind-merge';
import { toTitleCase } from "../../utils/stringUtils";
import type { ButtonProps } from "../../models/button";

function Button({ children, primary, secondary, success, warning, danger, outline, rounded, ...rest }: ButtonProps) {

    const classes = twMerge(
        className(rest.className, 'flex items-center px-3 py-1.5 border cursor-pointer whitespace-nowrap', {
            'border-blue-500 bg-blue-500 text-white': primary,
            'border-gray-900 bg-gray-900 text-white': secondary,
            'border-green-500 bg-green-500 text-white': success,
            'border-yellow-400 bg-yellow-400 text-white': warning,
            'border-red-500 bg-red-500 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger
        })
    );

    return (
        <button {...rest} className={classes}>
            {typeof children === 'string' ? toTitleCase(children) : children}
        </button>
    );
}

export default Button;
