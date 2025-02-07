import classNames from "classnames";
import styles from "./nav-minimize-button.module.css"
import { NavIconMinimize } from "@/components/icons/nav-icons"

interface NavMinimizeButtonProps {
    minimized: boolean;
    setMinimized: (minimized: boolean) => void;
}

export function NavMinimizeButton({ minimized, setMinimized }: NavMinimizeButtonProps) {
    return (
        <button
        type="button"
        className={classNames(styles["minimize-btn"], minimized && styles.minimized, "text-preset-3")}
        onClick={() => setMinimized(!minimized)}
      >

        {/* <Image className={styles["minimize-indicator"]} src={icon} alt="Minimize menu" width={24} height={24} /> */}
        <NavIconMinimize className={styles["minimize-indicator"]} />
        <span className={styles["minimize-label"]}>Minimize menu</span>
      </button>

    )
}