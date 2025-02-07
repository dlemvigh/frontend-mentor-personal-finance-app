import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css"
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "danger";
}

export function Button({ variant, children, ...props }: ButtonProps) {
    return (
        <button className={classNames(styles.button, styles[variant], "text-preset-4-bold")} {...props}>
            {children}
        </button>
    );
}