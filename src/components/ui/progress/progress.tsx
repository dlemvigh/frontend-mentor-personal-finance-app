import classNames from "classnames";
import { CSSProperties, ProgressHTMLAttributes } from "react";
import styles from './progress.module.css';

interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement>{
    color: string;
    wide?: boolean
}

export function Progress({ className, style, color, wide, ...props }: ProgressProps) {
    return (
        <progress 
            className={classNames(className, styles.progress, wide && styles.wide)} 
            style={{
                ...style,
                '--progress-color': color,
            } as CSSProperties}
            {...props} 
        />
    )
}