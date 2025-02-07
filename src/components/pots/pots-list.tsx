import { Pot as PotType } from "@/data/data";
import { Pot } from "./pot";
import styles from "./pots-list.module.css"

interface PotsListProps {
    pots: PotType[];
}

export function PotsList({ pots }: PotsListProps) {
    return (
        <div className={styles["pots-list"]}>
            {pots.map((pot) => (
                <Pot key={pot.name} pot={pot} />
            ))}
        </div>
    );
}