import classNames from "classnames";
import styles from "./nav-minimize-button.module.css"
import icon from "@/assets/images/icon-minimize-menu.svg"
import Image from "next/image";

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

        <Image className={styles["minimize-indicator"]} src={icon} alt="Minimize menu" width={24} height={24} />
        <span className={styles["minimize-label"]}>Minimize menu</span>
      </button>

    )
}