import { ChangeEvent, useCallback } from "react";
import Image from "next/image";
import iconSearch from "@/assets/images/icon-search.svg"

import styles from "./search-input.module.css"

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    onChange?: (value: string) => void;
}

export function SearchInput({ onChange, ...props }: SearchInputProps) {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = String(event.target.value);
    onChange?.(value)
  }, [onChange])
  
  return (
    <div className={styles["search"]}>
      <input
        className={styles["search-input"]}
        type="text"
        onChange={handleChange}
        {...props}
      />
      <Image
        className={styles["search-icon"]}
        src={iconSearch}
        alt=""
        width={16}
        height={16}
      />
    </div>
  );
}
