import { Pot as PotType } from "@/data/data";
import styles from "./pot.module.css";
import { CSSProperties } from "react";
import classNames from "classnames";
import { Button } from "@/components/ui/button/button";

interface PotProps {
    pot: PotType;
}

function toPercentage(value: number) {
    return (value * 100).toPrecision(3);
}

export function Pot({ pot }: PotProps) {
    return (
        <div className={styles.pot} style={{ "--pot-color": pot.theme } as CSSProperties}>
            <div className={styles["pot-title-row"]}>
                <div className={styles["pot-title-color"]} />
                <h2 className={classNames(styles["pot-title"], "text-preset-2")}>
                    {pot.name}
                </h2>
                {/* TODO ... menu */}
            </div>
            <div className={styles["pot-details"]}>
                <div className={classNames(styles["pot-total-title"], "text-preset-4")}>Total saved</div>
                <div className={classNames(styles["pot-total"], "text-preset-1")}>${pot.total.toFixed(2)}</div>
                <progress className={styles["pot-progress"]} max={pot.target} value={pot.total} />
                <div className={classNames(styles["pot-percentage"], "text-preset-5-bold")}>{toPercentage(pot.total / pot.target)}%</div>
                <div className={classNames(styles["pot-target-title"], "text-preset-5")}>Target of ${pot.target}</div>
            </div>
            <div className={styles["pot-buttons"]}>
                {/* TODO make button component */}
                <Button type="button" variant="secondary">+ Add Money</Button>
                <Button type="button" variant="secondary">Withdraw</Button>
            </div>
        </div>
    );
}
